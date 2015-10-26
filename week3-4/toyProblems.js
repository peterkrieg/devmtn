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
