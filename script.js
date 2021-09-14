// var x = document.getElementById("Owner-Read");

// x.addEventListener('change', myFunction());

// function myFunction() {
//     if(this.checked) {
//         alert("checked!");
//     }
//     else{
//         alert("Unchecked!");

//     }
// }


// function myFunction() {
//     let x = document.getElementById("demo");
//     x.style.fontSize = "25px"; 
//     x.style.color = "red"; 
//   }


// const cb = document.querySelector('#checked');

// cb.addEventListener('change', myFunction());

function myFunction(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values=[];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    }    );
    return values;
}

const button = document.querySelector('#button');
button.addEventListener('click', (event)=> {
    alert(myFunction('Check'));
});