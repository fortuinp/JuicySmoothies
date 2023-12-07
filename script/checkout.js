//checkout
let yr= new Date().getFullYear();

document.getElementById('Curryearr').textContent= "Juicy Smoothies est."+yr
//get from cart
let checks= document.getElementById('data-table-checkout')
let checkeditem=JSON.parse(localStorage.getItem("checkout"))


    let cartproducts= Object.groupBy(checkeditem,item=> item.id)
  
    if (cartproducts){
        for (let key in cartproducts) {
            console.log(cartproducts[key][0].flavour);
            console.log(cartproducts[key][0].length);
            checks.innerHTML +=
            `<tr>
            <td>${cartproducts[key][0].flavour}</td>
            <td>${cartproducts[key].length}</td>
            <td>${cartproducts[key][0].price}</td>
            <td>R${eval(`${cartproducts[key][0].price}*${cartproducts[key].length}`)}</td>
            </tr>
            
            `
        }
    }     
        
    function clearCart() {
        localStorage.removeItem("checkout")
        checks.innerHTML=""
    }
    document.querySelector('.clear').addEventListener('click',clearCart)

    // function purchase() {
    //   alert('Thank you for shopping with Juicy Smoothies') 
    // }
    // document.querySelector('.purchase').addEventListener('click',purchase)
