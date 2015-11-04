var expect = chai.expect;
var should = chai.should();

describe('Main', function () {

  before(function(){

  });

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('index.html');
  });

  afterEach(function(){
    fixture.cleanup();
  });

  describe('randomWord', function () {
    it('should have a function called `randomWord`', function (){
      (randomWord).should.be.an.instanceof(Function);
    });
  });

});