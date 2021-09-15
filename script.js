var selections = {};
var checkboxElems = document.querySelectorAll("input[type='checkbox']");
var totalElem = document.getElementById("totalScore");


for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", generateResult);
}

  var numericTotal=0;
  var octalSymbol = '';

function generateResult() {
  
  if (document.getElementById("OR").checked == true) {numericTotal+=400; octalSymbol+='r';} else{octalSymbol+='-'}
  if (document.getElementById("OW").checked == true) {numericTotal+=200; octalSymbol+='w';} else{octalSymbol+='-'}
  if (document.getElementById("OE").checked == true) {numericTotal+=100; octalSymbol+='x';} else{octalSymbol+='-'}
  
  if (document.getElementById("GR").checked == true) {numericTotal+=40; octalSymbol+='r';} else{octalSymbol+='-'}
  if (document.getElementById("GW").checked == true) {numericTotal+=20; octalSymbol+='w';} else{octalSymbol+='-'}
  if (document.getElementById("GE").checked == true) {numericTotal+=10; octalSymbol+='x';} else{octalSymbol+='-'}
  
  if (document.getElementById("PR").checked == true) {numericTotal+=4; octalSymbol+='r';} else{octalSymbol+='-'}
  if (document.getElementById("PW").checked == true) {numericTotal+=2; octalSymbol+='w';} else{octalSymbol+='-'}
  if (document.getElementById("PE").checked == true) {numericTotal+=1; octalSymbol+='x';} else{octalSymbol+='-'}
    
  document.getElementById("numericTotal").innerHTML = numericTotal;
  document.getElementById("octalSymbol").innerHTML = octalSymbol;
  result.style.display = "block";
  numericTotal = 0;
  octalSymbol = '';

}