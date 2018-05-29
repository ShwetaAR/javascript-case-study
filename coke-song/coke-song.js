 module.exports = CokeSong;

 function CokeSong(){
 	this.verse=function(canNumber){
 		if(canNumber>=2){
 			return  +canNumber+' cans of coke in the box, '+canNumber+' cans of coke.\nTake one down and pass it around, '+(canNumber-1)+' cans of coke in the box.\n';
 		}
 		else if(canNumber==1){
 			return  +canNumber+' can of coke in the box, '+canNumber+' can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n';
 		}
 		else if(canNumber==0){
 			return 'No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
 		}
 		
 	}
 }

 CokeSong.prototype.sing=function(verse1,verse2){
 	console.log(verse1);
 	console.log(verse2);
 	 if(verse1==undefined&&verse2==undefined){
 		return 'full song';


 	}
 	else if(verse2==undefined){
        
 		return verse1+' cans of coke in the box, '+verse1+' cans of coke.\nTake one down and pass it around, '+(verse1-1)+' cans of coke in the box.\n\n'+(verse1-1)+' cans of coke in the box, '+(verse1-1)+' cans of coke.\nTake one down and pass it around, '+(verse1-2)+' can of coke in the box.\n\n'+(verse1-2)+' can of coke in the box, '+(verse1-2)+' can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n\nNo more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n';
 	}
     else
        return verse1+' cans of coke in the box, '+verse1+' cans of coke.\nTake one down and pass it around, '+(verse1-1)+' cans of coke in the box.\n\n'+(verse1-1)+' cans of coke in the box, '+(verse1-1)+' cans of coke.\nTake one down and pass it around, '+(verse2)+' cans of coke in the box.\n\n'+(verse2)+' cans of coke in the box, '+(verse2)+' cans of coke.\nTake one down and pass it around, '+(verse2-1)+' cans of coke in the box.\n';

 		

 }



