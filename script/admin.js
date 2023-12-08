//admin
let yr= new Date().getFullYear();
document.getElementById('Curryearr').textContent= "Juicy Smoothies est."+yr


let adminContent= document.getElementById('data-table-admin')

function adminTable() {
    try{
        let Smoothies=JSON.parse(localStorage.getItem("smoothies"))
    
  Smoothies.forEach((item,i )=>{
    console.log(item.flavour);
        adminContent.innerHTML+=
        `<tr>
        <td><img src='${item.url}'  alt="${item.flavour}" ></td>
        <td>${item.flavour}</td>
        <td>R${item.price}</td>
        <td>
        <div class= "col">
        <button>edit</button>
        <button>delete</button>
        </div>
        </td>
        </tr>
        
        `
        
        })}catch{e}
}
adminTable()