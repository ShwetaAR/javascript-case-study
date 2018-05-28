
var Who = require('./who.js');

describe('Name', function () {
  var who = new Who();

  it('gives one to you if no parameter given', function () {
  	//console.log('without parameter'+who.name());
    expect(who.name()).toEqual('One for you, one for me.');
  });

 it('gives one to Alice if \'Alice\' is given', function () {
 		//console.log('with parameter'+who.name('Alice'));

    expect(who.name('Alice')).toEqual('One for Alice, one for me.');
  });
});
