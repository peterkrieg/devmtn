function doSomethingTakesTime(){
  var promise = $q.defer();

  // thing that takes time
  // this thing probably needs a callback
    function callback(){
    	promise.resolve();
    }

  return promise;
}