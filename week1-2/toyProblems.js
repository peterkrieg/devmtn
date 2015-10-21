// 10/21/15-morning toy problems


function strReverse(str){
	return str.split('').reverse().join('');
}






for(var i=0; i<=100; i++){
	if(i%5===0 && i%3===0){
		console.log('fizzbuzz');
	}
	else if(i%5===0){
		console.log('buzz');
	}
	else if(i%3===0){
		console.log('fizz');
	}
	else{
		console.log(i);
	}
}

//  very short way

for(var i=0; i<101;){
	console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
}

