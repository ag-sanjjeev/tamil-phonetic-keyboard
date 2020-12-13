function getCursorPos(input) {
    if ("selectionStart" in input && document.activeElement == input) {
        return {
            start: input.selectionStart,
            end: input.selectionEnd
        };
    }
    else if (input.createTextRange) {
        var sel = document.selection.createRange();
        if (sel.parentElement() === input) {
            var rng = input.createTextRange();
            rng.moveToBookmark(sel.getBookmark());
            for (var len = 0;
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                len++;
            }
            rng.setEndPoint("StartToStart", input.createTextRange());
            for (var pos = { start: 0, end: len };
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                pos.start++;
                pos.end++;
            }
            return pos;
        }
    }
    return -1;
}


function getCharacterPrecedingCaret(myField,startPos) {
	prevChar = myField.value.substring(startPos - 2,startPos - 1 );
	return prevChar;
}

function getCharacterCurrentCaret(myField,startPos) {
	Char = myField.value.substring(startPos - 1,startPos );
	return Char;
}

function getProcedingString(myField, startPos) {
	prevStr =  myField.value.substring(0,startPos - 1);
	return prevStr;
}

function getTrailingString(myField, endPos) {
	nextStr = myField.value.substring(endPos, myField.value.length);
	return nextStr;
}

function isEnglish(s) {

	var alphaExp = /[a-zA-Z]+/;

	if(s.match(alphaExp)){
		return true;
	} else {
		return false;
	}

}

function is_not_valid (val) {
	if (val == 'undefined' || val == undefined || val == 'null' || val == null || val == '') {
		return true;
	} else {
		return false;
	}

}

function setCursorPos(input, start, end) { 
    if (arguments.length < 3) end = start;
    if ("selectionStart" in input) {
        setTimeout(function() {
            input.selectionStart = start;
            input.selectionEnd = end;
        }, 1);
    }
    else if (input.createTextRange) {
        var rng = input.createTextRange();
        rng.moveStart("character", start);
        rng.collapse();
        rng.moveEnd("character", end - start);
        rng.select();
    }
}

function copytext(id) {
    var copyText = $(id);
    
    copyText.select();
    // copyText.setSelectionRange(0, 99999); /*For mobile devices*/        
    document.execCommand("copy");
}

function pastetext(id) {
    var pasteText = $(id);
    pasteText.focus();

    navigator.clipboard.readText().then(text => {
        $(id).val(text);
    }).catch(err => {
        alert( 'Give clipboard permission : '+err);
        document.execCommand("paste");
    });
}

function loadtextfile() {

  var texttoload = document.getElementById("open-file").files[0];

  var fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent)
  {
    var textFromFileLoaded = fileLoadedEvent.target.result;
    document.getElementById("input_area").value = textFromFileLoaded;
    localStorage.setItem('input_tamil', textFromFileLoaded);
  };
  fileReader.readAsText(texttoload, "UTF-8");  

}

function savetextfile() {
  var textToWrite = document.getElementById("input_area").value;
  var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  var fileNameToSaveAs = 'New Text File.txt';

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null)
  {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else

  {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}


function printTextArea() {
    childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
    childWindow.document.open();
    childWindow.document.write('<html><head></head><body>');
    childWindow.document.write(document.getElementById('input_area').value.replace(/\n/gi,'<br>'));
    childWindow.document.write('</body></html>');
    childWindow.print();
    childWindow.document.close();
    childWindow.close();
}

function text_counter(text) {

  var total_word = countWords(text);
  $('#total-word').text(total_word);

  var total_char = countChars(text);
  $('#total-character').text(total_char);

}

function countWords(s){
    s = s.replace(/\n/g,' ');
    return s.split(' ').filter(function(str){return str!="";}).length;
}

function countChars(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing

    s = s.replace(/ /g,'');
    s = s.replace(/\n/g,'');

    s = s.split('');

    for (var i = 0; i < s.length; i++) {
      s[i] = s[i].replace(/\u0BCD/,'');
      s[i] = s[i].replace(/\u0BBE/,'');
      s[i] = s[i].replace(/\u0BBF/,'');
      s[i] = s[i].replace(/\u0BC0/,'');
      s[i] = s[i].replace(/\u0BC1/,'');
      s[i] = s[i].replace(/\u0BC2/,'');
      s[i] = s[i].replace(/\u0BC6/,'');
      s[i] = s[i].replace(/\u0BC7/,'');
      s[i] = s[i].replace(/\u0BC8/,'');
      s[i] = s[i].replace(/\u0BCA/,'');
      s[i] = s[i].replace(/\u0BCB/,'');
      s[i] = s[i].replace(/\u0BCC/,'');
    }

    s = s.join('');

    return s.length;
} 

function text_tone_modifier () {
  var tone_text = localStorage.getItem('tone_text');

  if (!is_not_valid(tone_text)) {
    if (tone_text == 'enabled') {
      $('#tone-text').html('<svg class="primary" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path d="M256,464c22.779,0,41.411-18.719,41.411-41.6h-82.823C214.588,445.281,233.221,464,256,464z M390.589,339.2V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059,13.518-31.059,31.2v14.559c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8L390.589,339.2z"/></svg>');
    } else if (tone_text == 'disabled') {
      $('#tone-text').html('<svg class="primary" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g><path d="M256,463.656c22.814,0,41.475-18.656,41.475-41.656h-82.95C214.525,445,233.186,463.656,256,463.656z"/><path d="M131.083,107.172l0.053,0.074L98.09,74.277L74.004,98.383l63.042,63.153C126.888,180.521,121,202.196,121,225.07v114.555l-41,41.656V402h297.743l36.182,36.33l24.079-24.301L425.9,402h0.316L131.083,107.172z"/><path d="M391,225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243c-17.628,0-31,13.537-31,31.243v14.578c-15,3.438-29.048,9.501-41.75,17.663L391,319.355V225.07z"/></g></svg>');
    }
  }
}

/*==================================================*/

var is_gecko = /gecko/i.test(navigator.userAgent);
var is_ie = /MSIE/.test(navigator.userAgent);

function setSelectionRange(input, start, end) {
  if (is_gecko) {
    input.setSelectionRange(start, end);
  } else {
    // assumed IE
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart("character", start);
    range.moveEnd("character", end - start);
    range.select();
  }
};

function getSelectionStart(input) {
  if (is_gecko)
    return input.selectionStart;
  var range = document.selection.createRange();
  var isCollapsed = range.compareEndPoints("StartToEnd", range) == 0;
  if (!isCollapsed)
    range.collapse(true);
  var b = range.getBookmark();
  return b.charCodeAt(2) - 2;
};

function getSelectionEnd(input) {
  if (is_gecko)
    return input.selectionEnd;
  var range = document.selection.createRange();
  var isCollapsed = range.compareEndPoints("StartToEnd", range) == 0;
  if (!isCollapsed)
    range.collapse(false);
  var b = range.getBookmark();
  return b.charCodeAt(2) - 2;
};

function proceedingWord(text, caretPos) {
  var index = text.indexOf(caretPos);
  var preText = text.substring(0, caretPos);
  if (preText.indexOf("\n") > 0) {
      var words = preText.split("\n");        

      preText = words[words.length - 1];
      if (preText.indexOf(" ") > 0) {
          var words = preText.split(" ");            
      }

      return words[words.length - 1]; //return last word

  } else if (preText.indexOf(" ") > 0) {
      var words = preText.split(" ");
      return words[words.length - 1]; //return last word
  } else {
      return preText;
  }
}


function getProceedingCaretPosition(ctrl) {
  var CaretPos = 0;   // IE Support
  if (document.selection) {
      ctrl.focus();
      var Sel = document.selection.createRange();
      Sel.moveStart('character', -ctrl.value.length);
      CaretPos = Sel.text.length;
  }
  // Firefox support
  else if (ctrl.selectionStart || ctrl.selectionStart == '0')
      CaretPos = ctrl.selectionStart;

  return (CaretPos);
}


function getBeforeCount (str, search) {
    return str.split(search).length - 1;
}

function replaceTextOccurance(id, search, replaceWith) { 
    if (id.value.indexOf(search) >= 0) {
        var start = id.selectionStart;
        var end = id.selectionEnd;
        var textBefore = id.value.substr(0, end);
        var textAfter = id.value.substr(end);

        var length = id.value.substr(0, end).split(" ").length;
        var textBeforeProcessed = ''; 
        var lastWord_val = '';
        if (textBefore.indexOf(" ") > 0) {
          var textBeforeArray = textBefore.split(" ");
          var length = textBeforeArray.length;
          var lastWord = textBeforeArray.pop();
          lastWord_val = lastWord;
          if (is_not_valid(lastWord)) {
            lastWord = " ";            
            textBeforeArray.push(lastWord);
            textBeforeProcessed = textBeforeArray.join(" ");
          } else {
            lastWord = lastWord.replace(search, replaceWith);
            lastWord = (is_not_valid(lastWord)) ? " " : lastWord;
            textBeforeArray.push(lastWord);
            textBeforeProcessed = textBeforeArray.join(" ");
          }
        } else {
          if (!is_not_valid(textBefore)) {
            lastWord_val = textBefore;
            textBeforeProcessed = textBefore.replace(search, replaceWith);
          }
        }

        if (!is_not_valid(replaceWith)) {
          var lengthDiff = (replaceWith.length - search.length) * getBeforeCount(lastWord_val, search);                            
          id.value = textBeforeProcessed + textAfter;
          setSelectionRange(id, start + lengthDiff, end + lengthDiff);           
          return id.value;
        }
    }
}
