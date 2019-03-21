import {
    apply,
    filter,
    MergeStrategy,
    mergeWith,
    move,
    noop,
    Rule,
    SchematicContext,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';

import { normalize, strings } from '@angular-devkit/core';
import { setupOptions } from './resource-schematic_setup';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function resource(options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        if (!options['name'] && options['--']) {
            for (let i = 0; i < options['--'].length; i++) {
                switch (i) {
                    case 0:
                        options['name'] = options['--'][i];
                        break;
                    case 1:
                        options['dataAttr'] = options['--'][i];
                        break;
                }
            }
        }
        if (!options['dataAttr'] || !options['name']) {
            options['dataAttr'] = 'resource';
        }

        setupOptions(tree, options);

        const movePath = (options.flat) ?
            normalize(options.path) :
            normalize(options.path + '/');
        const templateSource = apply(url('./files'), [
            options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
            template({
                ...strings,
                ...options,
            }),
            move(movePath),
        ]);

        const rule = mergeWith(templateSource, MergeStrategy.Default);
        return rule(tree, _context);
    };
}

