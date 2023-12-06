//checkout
let yr= new Date().getFullYear();

document.getElementById('Curryearr').textContent= "Juicy Smoothies est."+yr

let checkeditem=JSON.parse(localStorage.getItem("checkout"))
console.log(checkeditem);

// let checkitem =  JSON.parse(localStorage.getItem("checkout")) ?
// JSON.parse(localStorage.getItem("checkout")) :
// localStorage.setItem("checkout",
// JSON.stringify(checkout));
// console.log(checkitem);