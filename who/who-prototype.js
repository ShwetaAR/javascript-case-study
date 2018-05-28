function Who(){}

	Who.prototype.name=function(name){
		if(name){
			return 'One for '+name+', one for me.';	
		}
		else 
			return 'One for you, one for me.';
	}
	 module.exports = Who;
