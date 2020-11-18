// when on
$(window).on('load',function () {

	$('.kostel').addClass('muncul');
});
// when on///////////////
$(window).on('load',function () {

	$('.jumbotron').addClass('jumbotronmuncul');
});
// when on///////////////

// scroll..........
$(window).scroll(function() {
	var wScroll=$(this).scrollTop();


	if(wScroll>$('.lengkap').offset().top-500) {
		$('.lengkap').addClass('muncul1');
	}

		if(wScroll>$('.tentang').offset().top-500) {
		$('.tentang').addClass('muncul2');
	}

});



// const prev = document.getElementsByClassName('prev');
// const next = document.getElementsByClassName('next');


// const gambarkosan = document.getElementsByClassName('gambarkosan');


// for (var i = 0; i < prev.length; i++) {
// prev[i] .addEventListener('click',function (){
	

// for (var i = 0; i < gambarkosan.length; i++) {
// 	gambarkosan[i].setAttribute('src','kos/' + '1' + '.jpg');
// }




// });
// }




















// prev[0] .addEventListener('click',function (){
// const gambarkosan = document.getElementsByClassName('gambarkosan')[0];
// 	gambarkosan.setAttribute('src','kos/' + '1' + '.jpg');
// });


// prev[1] .addEventListener('click',function (){
// const gambarkosan = document.getElementsByClassName('gambarkosan')[1];
// 	gambarkosan.setAttribute('src','kos/' + '7' + '.jpg');
// });




// next[0].addEventListener('click',function (){
	
// const gambarkosan = document.getElementsByClassName('gambarkosan')[0];
// 	gambarkosan.setAttribute('src','kos/' + '5' + '.jpg');
// });



// next[1] .addEventListener('click',function (){
	
// const gambarkosan = document.getElementsByClassName('gambarkosan')[1];
// 	gambarkosan.setAttribute('src','kos/' + '6' + '.jpg');
// });