// Select color input

// Select size input

let color = $('#colorPicker');

let height = $('#inputHeight');

let width = $('#inputWeight');

const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){

   event.preventDefault();

   let gHeight = height.val();

   let gWidth = width.val();

   makeGrid(gHeight, gWidth);

});

function makeGrid(h, w) {

canvas.innerHTML ='';

// Your code goes here!

while($('#pixelCanvas').is(':empty') === false){

     $('tr').children.remove();

}

	for(let i = 1; i <= h; i++){

		$('#pixelCanvas').append('<tr id=row' + i + '></tr>');

  for (let j = 1; j <= w; j++){

    $('#row' + i).append('<td></td>');

  }

	}
	 $('td').on('click',function(event){

   let c = color.val();

	 if($(this).attr('style')){

	    $(this).removeAttr('style', 'background-color:'+c);

	 }else{

		  $(this).attr('style', 'background-color:'+c);

	 }

 });

	

	

}