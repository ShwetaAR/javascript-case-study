 module.exports = PhoneNumber;

 function PhoneNumber(inputnumber){
       
 	this.number=function(){
 		var firstChar= inputnumber.charAt(0);

 		if(inputnumber.length==9||(inputnumber.length==11&& firstChar!=1)||(inputnumber.length>11)){
 			return null;
 		}
 		else 
 			
 				if(inputnumber.length==11&& firstChar==1){
 					return inputnumber.substring(1);
 				}
 				
		   console.log(inputnumber);
		    console.log(inputnumber.replace(/\D/g, ""));
		
		return inputnumber.replace(/\w/g, "");
          
			

	}

 	
 }