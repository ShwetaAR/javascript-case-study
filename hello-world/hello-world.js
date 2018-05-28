function HelloWorld(){
this.hello = function(value) {
		if(value==undefined){
		return 'Hello, World!';
	}
	else
		return ('Hello, World!').length;
	}
}


 module.exports = HelloWorld;