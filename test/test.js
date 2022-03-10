var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("pascalToSnake", function() {
  it('should return test_controller', function() {
    assert.equal(pascalToSnake("TestController"), "test_controller");
  });
  it('should return movie_and_book', function() {
    assert.equal(pascalToSnake("MovieAndBook"), "movie_and_book");
  });
  it('should return app7_test', function() {
    assert.equal(pascalToSnake("App7Test"), "app7_test");
  });
  it('should return home', function() {
    assert.equal(pascalToSnake("Home"), "home");
  });
  it('should return play-movie', function() {
    assert.equal(pascalToSnake("play-movie"), "play-movie ");
  });
  it('should return \"1\"', function() {
    assert.equal(pascalToSnake("1"), "\"1\"");
  });

});
