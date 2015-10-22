$(function(){
	var $todoApp = $('#todoApp');

	var $todoTitle = $('<h1>jQuery Todo App</h1>');
	var $input = $('<input placeholder="add item here" type="text" />');
	var $addItemButton = $('<button>Add</button>');
	var $list = $('<ul></ul>');
	var $todoItem = $('<li></li>');
	var $removeDoneItemButton = $('<button>Remove</button>');

	$todoApp.append($todoTitle);
	$todoApp.append($input);
	$todoApp.append($addItemButton);
	$todoApp.append($list);
	$todoApp.append($removeDoneItemButton);

	function addItem(){
		var $userText = $input.val();
		if($userText){
			var $newTodoItem = $('<li></li>');
			$newTodoItem.text($userText);
			$list.append($newTodoItem);
			$input.val('');
		}
	}

	$addItemButton.on('click', addItem);

	$input.on('keyup', function(e){
		if(e.which===13){
			addItem();
		}
	});

	$list.on('click', 'li', function(){
		var todoItem = $(this);
		$(this).toggleClass("done");
	});

	$removeDoneItemButton.on('click', function(){
		$('.done').remove();
	});



});