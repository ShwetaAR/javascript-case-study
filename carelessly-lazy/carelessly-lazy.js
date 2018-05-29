module.exports = lazyGuy;

function lazyGuy (){

	this.hey=function(userInput){
		
			if(/[A-Z]/.test(userInput)&&userInput.endsWith('?')){
			 return 'Calm down, I know what I\'m doing!';
			}
			else
				if(/[A-Z]/.test(userInput)){
					return 'Whoa, chill out!';
				}
		if(userInput.endsWith('?'))
		return 'Sure.';
		if(!userInput.replace(/\s/g, '').length){
		return 'Fine. Be that way!';
		}
	
		else
			return 'Whatever.';


	}

}