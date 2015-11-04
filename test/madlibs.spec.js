var expect = chai.expect;
var should = chai.should();

describe('Main', function () {

  before(function(){

  });

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('index.html');

    document.adj = ['foo'];
    document.verb = ['bar'];
    document.noun = ['baz'];

    run();

  });

  afterEach(function(){
    fixture.cleanup();
  });



  describe('randomWord', function () {
    it('should have a function called `randomWord`', function (){
      console.log(document);
      (randomWord).should.be.an.instanceof(Function);
    });
  });

});