var chai = require('chai');
var expect = chai.expect;
var mongooseUtil = require('../lib');

describe('mongooseUtil.toMongooseSchema', function() {
    it('should not support array type', function() {
        expect(function() {
            mongooseUtil.toMongooseSchema();
        }).to.throw();
    });
});