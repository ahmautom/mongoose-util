var supportedSchemaVersions = ['http://json-schema.org/draft-04/schema#'];

function toMongooseSchema(jsonSchema, options) {
    // options.refs
    if (supportedSchemaVersions.indexOf(jsonSchema['$schema']) < 0) {
        throw new Error('Schema version not support');
    }

    if (jsonSchema.type === 'array') {
        throw new TypeError('Schema with array type is not supported');
    }

    options = options || {};

    var mongooseSchema = {};

    var plugin = function (schema, options){
        schema.path();

    };

    jsonSchema.properties
    jsonSchema.required

    // handle $ref

    return plugin;
};

/*

function convertType(type){
switch (type) {
    case 'array':
        return 'array';
    case 'boolean':
        return 'boolean';
    case 'integer':
    case 'number':
        return 'number';
    case 'null':
    case 'object':
        return 'mixed';
    case 'string':
        return 'string';
}

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

*/