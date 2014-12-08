var chai = require('chai');
var expect = chai.expect;
var mongooseUtil = require('../lib');

describe('mongooseUtil.toMongooseSchema', function() {
    it('should transform json schema into mongoose compatible schema object (draft-04)', function() {
        var obj = mongooseUtil.toMongooseSchema(json);
        expect(obj).to.eql({

        });
    });

    it('should transform support array type', function() {
        expect(function() {
            mongooseUtil.toMongooseSchema();
        }).to.throw();
    });
});