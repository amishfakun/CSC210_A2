
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
        delete selections[e.target.id];
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
