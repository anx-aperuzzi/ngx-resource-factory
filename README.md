# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.
###Step by step install for development
1. For Install u will need th following dependency:
```bash
npm install -g @angular-devkit/schematics-cli
```
or
```bash
node yarn add -D @angular-devkit/schematics-cli
```
2. After successfully installed dependency you have to build it once every *.ts file modification.
After first build you need to link with yarn or npm.
```bash
node yarn link
```
or
```bash
npm link
```
3. after that go to the directory of your project and link the schematics with the name
```bash
node yarn link <project_name_from_package.json> 
```
or
```bash
npm link <project_name_from_package.json>
```
this case name will be ngx-resource-factory

###Install
```bash
node yarn add ngx-resource-factory-schematic
```
or
```bash
npm i ngx-resource-factory-schematic
```

###Using
Calling from schematic context

```bash
schematics ngx-resource-factory:resource my/directory/tree/name-of-the-resource  resource-attribute
```
Calling from angular context
```bash
ng g ngx-resource-factory:resource my/directory/tree/name-of-the-resource resource-attribute
```
#### Switches
1. --name="name of File with directory structure"
2. --path="relative path to your project / only needed if name does not contain path"
3. --dataAttr="data attribute name(property name of JSON structure) for resource file"

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

##License
The MIT License (MIT)

Copyright (c) 2017 ANEXIA Internetdienstleistungs GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.