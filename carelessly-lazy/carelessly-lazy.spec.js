var lazyGuy = require('./carelessly-lazy.js');

describe('guy', function () {
  var guy = new lazyGuy();

  it('stating something', function () {
    var result = guy.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', function () {
    var result = guy.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  xit('shouting gibberish', function () {
    var result = guy.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', function () {
    var result = guy.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('asking a numeric question', function () {
    var result = guy.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  it('asking gibberish', function () {
    var result = guy.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', function () {
    var result = guy.hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', function () {
    var result = guy.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('forceful questions', function () {
    var result = guy.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual("Calm down, I know what I'm doing!");
  });

  it('shouting numbers', function () {
    var result = guy.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('only numbers', function () {
    var result = guy.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with only numbers', function () {
    var result = guy.hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with abusive language', function () {
    var result = guy.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', function () {
    var result = guy.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', function () {
    var result = guy.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', function () {
    var result = guy.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', function () {
    var result = guy.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', function () {
    var result = guy.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

it('alternate silence', function () {
    var result = guy.hey('\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

it('with new line ', function () {
    var result = guy.hey('this is multiline\n question.');
    expect(result).toEqual('Whatever.');
  });


fit('with new line ', function () {
    var result = guy.hey('      \n                          \t    this \n is multiline\n question?');
    expect(result).toEqual('Sure.');
  });
});
