var selections = {};
var checkboxElems = document.querySelectorAll("input[type='checkbox']");
var totalElem = document.getElementById("seats-total");
var seatsElem = document.getElementById("selected-seats");

for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", displayCheck);
}

function displayCheck(e) {
  if (e.target.checked) {
    selections[e.target.id] = {
      name: e.target.name,
      value: e.target.value,
    };
  } else {

    selections[e.target.id] = {
      name: '-',
      value: 0,
    };
    
  }

  var result = [];
  var total = 0;

  for (var key in selections) {
    var listItem =
      "<li>" + selections[key].name  + "</li>";
    result.push(listItem);
    total += parseInt(selections[key].value);
  }

  totalElem.innerText = total;
  seatsElem.innerHTML = result.join("");
}


//    var chmodDecValue=0;
//   var chmodSymbol = '';

// function chmodResult() {
  
//   if (document.getElementById("OR").checked == true) {chmodDecValue+=400; chmodSymbol+='r';} else{chmodSymbol+='-'}
//   if (document.getElementById("OW").checked == true) {chmodDecValue+=200; chmodSymbol+='w';} else{chmodSymbol+='-'}
//   if (document.getElementById("OE").checked == true) {chmodDecValue+=100; chmodSymbol+='x';} else{chmodSymbol+='-'}
  
//   if (document.getElementById("GR").checked == true) {chmodDecValue+=40; chmodSymbol+='r';} else{chmodSymbol+='-'}
//   if (document.getElementById("GW").checked == true) {chmodDecValue+=20; chmodSymbol+='w';} else{chmodSymbol+='-'}
//   if (document.getElementById("GE").checked == true) {chmodDecValue+=10; chmodSymbol+='x';} else{chmodSymbol+='-'}
  
//   if (document.getElementById("PR").checked == true) {chmodDecValue+=4; chmodSymbol+='r';} else{chmodSymbol+='-'}
//   if (document.getElementById("PW").checked == true) {chmodDecValue+=2; chmodSymbol+='w';} else{chmodSymbol+='-'}
//   if (document.getElementById("PE").checked == true) {chmodDecValue+=1; chmodSymbol+='x';} else{chmodSymbol+='-'}
    
//   document.getElementById("chmodDecValue").innerHTML = chmodDecValue;
//   document.getElementById("chmodSymbol").innerHTML = chmodSymbol;
//   result.style.display = "block";
//   chmodDecValue =0;
//   chmodSymbol = '';

// }