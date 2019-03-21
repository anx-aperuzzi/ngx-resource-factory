import { Injectable } from '@angular/core';
import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { ResourceInstance } from 'ngx-resource-factory/resource/resource-instance';


export class <%= classify(name) %> extends ResourceInstance {
    pk: number;
}

@Injectable({
    providedIn: 'root'
})
@ResourceConfiguration({
    name: '<%= classify(name) %>Resource',
    url: '',
    pkAttr: 'pk',
    instanceClass: <%= classify(name) %>,
    stripTrailingSlashes: false,
    dataAttr: '<%= dataAttr %>',
    useDataAttrForList: true,
})
export class <%= classify(name) %>Resource extends Resource<<%= classify(name) %>> {
}


