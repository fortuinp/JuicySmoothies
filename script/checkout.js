//checkout
let yr= new Date().getFullYear();

document.getElementById('Curryearr').textContent= "Juicy Smoothies est."+yr

function display() {
    let checkeditem=JSON.parse(localStorage.getItem("checkout"))
    console.log(checkeditem);
    let checks= document.querySelector('[data-checkout]')
    checks.innerHtml = "";
    checkeditem.forEach((item) => {
        console.log(item.flavour);
        checks.innerHTML += 
        
        `
            <h1>${item.price}</h1>
        `
})}

display()

// let checkitem =  JSON.parse(localStorage.getItem("checkout")) ?
// JSON.parse(localStorage.getItem("checkout")) :
// localStorage.setItem("checkout",
// JSON.stringify(checkout));
// console.log(checkitem);