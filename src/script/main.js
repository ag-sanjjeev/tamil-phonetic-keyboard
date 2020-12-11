var isIE = document.all?true:false;

$(document).ready(function(e) {

	var input_tamil = localStorage.getItem('input_tamil');	

	if (is_not_valid(input_tamil)) {
		$('#input_area').val('');
		text_counter('');
	} else {
		$('#input_area').val(input_tamil);
		text_counter(input_tamil);
	}

	text_tone_modifier();	

	$('#input_area').on('input',function(e){ 

		var tone_text = localStorage.getItem('tone_text');

		if (!is_not_valid(tone_text)) { 
			if (tone_text == 'enabled') {
				playNote('1500','0.6','0.2');		
			}
		} else {
			playNote('1500','0.6','0.2');		
		}

		var id = document.getElementById('input_area');
		var Pos = getCursorPos(id);
		startPos = Pos['start'];
		endPos = Pos['end'];

		$('#caret-col').text(startPos);
		$('#caret-row').text(endPos);


		ta_phonetic_process('input_area',e);
		var text = $(this).val();
		if (is_not_valid(text)) { 			
			text_counter('');		
			localStorage.setItem('input_tamil', '');
		} else {			
			text_counter(text);		
			localStorage.setItem('input_tamil', text);
		}
		

		e.stopPropagation();
		e.preventDefault();			

	});

	$('#copy-text').on('click',function(e) {
		copytext('#input_area');
	});

	$('#delete-text').on('click',function(e) {

		var confirmation = confirm("Are you sure want delete?");

		if (confirmation) {
			$('#input_area').val('');
			$('#input_area').focus();
			localStorage.removeItem('input_tamil');
		}

	});

	$('#open-text').on('click', function(e) {
		

		var text_length = $('#input_area').val();

		if (text_length != '') {
			var confirmation = confirm("Do you want save before open file?");

			if (confirmation) {

				savetextfile();

			} else {
				$('#open-file').click();
			}

		} else {
			$('#open-file').click();
		}

	});

	$('#open-file').on('change', function(e) {
		setTimeout(loadtextfile(),1000);		
	});

	$('#save-text').on('click', function(e) {
		savetextfile();
	});

	$('#print-text').on('click', function(e) {
		printTextArea();
	});

	$('#about-project').on('click', function(e) {
		$('#about-project-modal').modal('show');
	});

	$('#tone-text').on('click', function(e) {

		var tone_text = localStorage.getItem('tone_text');

		if (!is_not_valid(tone_text)) {
			if (tone_text == 'enabled') {
				localStorage.setItem('tone_text','disabled');
			} else if (tone_text == 'disabled') {
				localStorage.setItem('tone_text','enabled');
			}
		} else {
			localStorage.setItem('tone_text','enabled');
		}

		text_tone_modifier();
		
	});

	$('#editor-theme').on('click', function(e) {
		var attr = $('#theme-css').attr('href');

		if (attr == 'src/styles/light.css') {
			$('#theme-css').attr('href','src/styles/dark.css');
		} else {
			$('#theme-css').attr('href','src/styles/light.css');
		}		

	});

});