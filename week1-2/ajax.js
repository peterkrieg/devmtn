$(function(){
	var $jqueryApp = $('div.ajax-app');
	var $header = $jqueryApp.find('h1');
	var $getDataBtn = $jqueryApp.find('.get-data');
	var $clearBtn = $jqueryApp.find('.clear');
	var $dataList = $jqueryApp.find('.data-list');{}




	// var ajaxParams = {
	// 	method: 'GET',
	// 	url: 'https://gist.githubusercontent.com/coolaj86/e67b9131d58e22b8b585/raw/photos.json'
	// };

	$getDataBtn.on('click', function(e){
		$.ajax({
			method: 'GET',
			url: 'https://gist.githubusercontent.com/coolaj86/e67b9131d58e22b8b585/raw/photos.json'
			// url: 'http://swapi.co/api/people/2'
		}).then(function(data){
			// console.log(data);
			var dataObj = JSON.parse(data);
			showData(dataObj);
		});


	});

	// would be better to write function called getData(), for example

	// digest functions into small functions.  separate functions into things that do things, and request thigns

function showData(data){
	alert('what');
	for(var i=0; i<data.length; i++){
		var currItem = data[i];
		var listItem = $('<li></li>');
		var paragraph = $('<p></p>');
		var image = $('<img src="'+currItem.url+'">');
		listItem.text(data[i].name);
		listItem.append(image);
		$dataList.append(listItem);
	}
}









	// var = selector getting the app
});