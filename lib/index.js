var supportedSchemaVersions = {
    'http://json-schema.org/draft-04/schema#': draft04
};

module.exports.toMongooseSchema = toMongooseSchema;

function toMongooseSchema(jsonSchema, options) {
    if (!(jsonSchema['$schema'] in supportedSchemaVersions)) {
        throw new Error('Schema version not support');
    }

    options = options || {};

    return supportedSchemaVersions[jsonSchema['$schema']](jsonSchema, options);
}

function draft04(jsonSchema, options) {
    var mongooseSchema = {};

    if (jsonSchema.type === 'array') {
        throw new TypeError('Schema with array type is not supported');
    }

    Object.keys(jsonSchema.properties).forEach(function(key) {
        var obj = jsonSchema.properties[key];
        // type
        // enum
        // oneOf
        // minItems
        // items
        // uniqueItems
        // pattern
        // minimum
        // maximum
        // media
        // $ref
    });

    if (Array.isArray(jsonSchema.required)) {
        jsonSchema.required.forEach(function(key) {
            if (key in mongooseSchema) {
                mongooseSchema[key].required = true;
            }
        });
    }

    return mongooseSchema;
}

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