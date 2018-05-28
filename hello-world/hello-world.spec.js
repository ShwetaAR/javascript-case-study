var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
  	const expected = 'Hello, World!';
  	console.log(helloWorld.hello());
    expect(helloWorld.hello()).toEqual(expected);
  });

  it(13, function () {
  	const expected = ('Hello, World!').length;
  	console.log(helloWorld.countlength(expected));
    expect(helloWorld.countlength(expected)).toEqual(expected);
  });
});
