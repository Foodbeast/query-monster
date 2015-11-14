var expect = chai.expect;
var should = chai.should();

describe('Return Object', function() {
  it('Should never return undefined', function() {
    expect(queryMonster.crush()).to.not.be.an('undefined');
  });
  it('Should always return an object', function() {
    expect(queryMonster.crush()).to.be.an('object');
  });
  it('Should always return .query as a string ', function() {
    expect(queryMonster.crush().query).to.be.a('string');
  });
  it('Should contain .phrases', function() {
    expect(queryMonster.crush().phrases).to.be.ok;
  });
  it('Should contain .terms', function() {
    expect(queryMonster.crush().terms).to.be.ok;
  });
});