var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var queryMonster = require('../dist/query-monster');

describe('queryMonster.crush()', function() {

  it('Should never return undefined', function() {
    var search = queryMonster.crush();
    search.should.not.be.an('undefined');
  });

  it('Should always return an object', function() {
    var search = queryMonster.crush();
    search.should.be.an('Object');
  });

  it('Should contain a query, phrases, and terms', function() {
    var search = queryMonster.crush();
    search.should.have.property('query');
    search.should.have.property('phrases');
    search.should.have.property('terms');
  });

  it('Should always return .query as a string ', function() {
    var search = queryMonster.crush();
    search.query.should.be.a('string');
  });

  it('Should remove duplicate phrases', function() {
    var search = queryMonster.crush('"pizza hut" and "pizza hut"');
    search.phrases.should.have.length.below(2);
  });

  it('Should remove duplicate terms', function() {
    var search = queryMonster.crush('pizza pizza pizza');
    search.terms.should.have.length.below(2);
  });

});