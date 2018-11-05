var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});


test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(1);
  var expected = 1;
  t.equal(actual, expected, 'Should return 1 when given 1');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(2);
  var expected = 2;
  t.equal(actual, expected, 'Should return 2 when given 2');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(3);
  var expected = "Fizz";
  t.equal(actual, expected, 'Should return fizz when given 3');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(5);
  var expected = "Buzz";
  t.equal(actual, expected, 'Should return Buzz when given 5');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(15);
  var expected = "FizzBuzz";
  t.equal(actual, expected, 'Should return FizzBuzz when given 15');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(0);
  var expected = 0;
  t.equal(actual, expected, 'Should return 0 when given 0');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(6);
  var expected = "Fizz";
  t.equal(actual, expected, 'Should return Fizz when given 6');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var actual = fizzbuzz(30);
  var expected = "FizzBuzz";
  t.equal(actual, expected, 'Should return FizzBuzz when given 30');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var threes = Math.floor(Math.random() * 33) * 3;
  var actual = fizzbuzz(threes);
  var expected = "Fizz";
  t.equal(actual, expected, 'Should return Fizz when given multiples of three');
  t.end();
});

test('Testing fizzbuzz return value', function(t) {
  var fives = Math.floor(Math.random() * 20) * 5;
  var actual = fizzbuzz(fives);
  var expected = "Buzz";
  t.equal(actual, expected, 'Should return Buzz when given multiples of five');
  t.end();
});

var r = Math.floor(Math.random() * 100);
test('Testing fizzbuzz return value', function(r) {
    
  var actual = r;
  
    var expected = function fizzbuzz(number){
    if ( number === 0 ) {
        return 0;
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else if (number % 3 === 0 ) {
        return "Fizz";
    } 
    else {
        return number;
    }
};
  t.equal(actual, expected, "error" );
  r.end();
});






