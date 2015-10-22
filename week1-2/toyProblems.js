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


// Return fibonacci sequence

function fib(num){
	if(num===1){
		return [1];
	}
	var arr = [1,1];
	var prevValue = 1;
	for(var i=2; i<num; i++){
		arr[i]= prevValue+arr[i-2];
		prevValue = arr[i];
	}
	return arr;
}




























