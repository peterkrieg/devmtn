//__________________________Toy Problems 10/26/15__________________________

// palindrome numbers-- biggest product of 2 2 digit numbers is 9009 (91*91)

function findPalindrome(){
	var num1, num2;
	var trueResult=0;
	var nums = [];
	var numsResults = [];

	function checkResult(num){
		var numArr = String(num).split('');
		for(var i=0; i<Math.floor(numArr.length/2); i++){
			if(numArr[i]!==numArr[numArr.length-i-1]){
				return false;
			}
		}
		return num;  // num returned should be palindrome
	}

	for(var i=999; i>99; i--){
		for(j=999; j>99; j--){
			result = checkResult(i*j);
			if(result!==false && Number(result)>Number(trueResult)){
				trueResult=result;
				nums.push(i);
				nums.push(j);
			}
		}
	}
	console.log(nums[nums.length-1], nums[nums.length-2]);
	return Number(trueResult);
	
}


//__________________________smallest number evenly divisible by all numbers from 1-20__________________________

function findSmallestNum(){
	var divisible=false;
	var num = 20;
	while(divisible===false){
		console.log(num);
		var result = checkDivisible(num);
		if(result!==false){
			return result;
		}
		num+=20;
	}

	function checkDivisible(num){
		for(var i=1; i<=20; i++){
			if(num%i!==0){
				return false;
			}
		}
		divisible = true;
		return num;
	}


}


//________________________Toy problem 10/28/15___________________________

// string parameter will be either + or symbol 


function simpleSymbols(str){
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var strArr = str.split('');
	for(var i=0; i<strArr.length; i++){
		var index = alphabet.indexOf(strArr[i]);
		if(index > -1){
			if(strArr[i-1]!=='+' || strArr[i+1]!=='+'){
				return false;
			}
		}
	}
	return true;
}



//_________________________toy problem 10/29/15__________________________

// write function that returns first non-repeated character


function checkString(str){
	var strArr = str.split('');
	for(var i=0; i<strArr.length; i++){
		var currChar = strArr[i];
		for(var j=i+1; j<strArr.length; j++){
			if(strArr[j]===currChar){
				break;
			}
			if(j===strArr.length-1){
				return currChar;
			}
		}
	}
}






// function checkString(str){
// 	var strArr = str.split('');
// 	for(var i=strArr.length-1; i>=0; i--){
// 		console.log('big loop ' +i);
// 		console.log(strArr);
// 		var currChar = strArr[i];
// 		console.log('current char is ' +currChar);
// 		var charRepeated = false;
// 		for(var j=i-1; j>=0; j--){
// 			console.log('small loop '+j);
// 			console.log(strArr);
// 			if(strArr[j]===currChar){
// 				charRepeated = true;
// 				strArr.splice(j, 1);
// 			}
// 		}
// 		if(charRepeated===false){
// 			return 'return value is ' +currChar;
// 		}
// 	}
// }



function addDigits(num){
	var bigNum = String(factorial(num));
	var digitsArr = bigNum.split('');
	var sum = 0;
	for(var i=0; i<digitsArr.length; i++){
		sum+=Number(digitsArr[i]);
	}
	return sum;
}

function factorial(num){
	if(num<0){
		return -1;
	}
	else if(num===0){
		return 1;
	}
	else{
		return num*factorial(num-1);
	}
}



function factorial(num){
	var result = 1;
	while(num>0){
		result*=num;
		num--;
	}
	return result;
}


//_________________________Toy problem 11/2/15__________________________

// AB CHECK

function abCheck(str){
	var strArr = str.toLowerCase().split('');
	for(var i=0; i<strArr.length; i++){
		if(strArr[i]==='a'){
			if(strArr[i+4]==='b' && strArr[i+1]!=='b' && strArr[i+2]!=='b'&&strArr[i+3]!=='b'){
				return true;
			}
		}
		if(strArr[i]==='b'){
			if(strArr[i+4]==='a' && strArr[i+1]!=='a' && strArr[i+2]!=='a'&&strArr[i+3]!=='a'){
				return true;
			}
		}
	}
	return false;
}











