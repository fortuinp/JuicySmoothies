// products
//https://i.postimg.cc/j5wDFRs0/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl-removebg-preview.png...red
//https://i.postimg.cc/K8dh82Xf/61783418-l-1024x683.jpg ..initial
//https://i.postimg.cc/zDFn0N5Q/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl.jpg strawberry
//https://i.postimg.cc/pLfxnsKK/240-F-60195257-Yb0t1-Gl-L6-Yhb-C0c0bp-Nt06-To-SMAsdg82.jpg choc chip
//https://i.postimg.cc/P55JTGgP/240-F-60195267-o-Usx-A2-V7-UIwng-JNOi2ss-MOSEu-Oj-LMRC1.jpg banana
//https://i.postimg.cc/bJcqG4B0/240-F-62583240-YUkve-XVAOZC9-Kupg0r-MRXl-C3-S6-AJ2sa-R.jpg kiwi
//https://i.postimg.cc/W1xvKQTR/240-F-63337375-f-KOc-YM95-ZH2-HGld-Jc7nv-Oquxuv5x-TPiz.jpg orange
//https://i.postimg.cc/sx5mjGZ9/240-F-63637648-Ge5ay-KEBx5-Gkr-FNg6g-Iaig-Lw-Hnqla8th.jpg red orange

let yr = new Date().getFullYear();

document.getElementById("Curryearr").textContent = "Juicy Smoothies est." + yr;
let Smoothies = JSON.parse(localStorage.getItem("smoothies"))
  ? JSON.parse(localStorage.getItem("smoothies"))
  : localStorage.setItem(
      "smoothies",
      JSON.stringify([
        {
          id: 1,
          flavour: "strawberry",
          price: 50,
          url: "https://i.postimg.cc/zDFn0N5Q/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl.jpg",
        },
        {
          id: 2,
          flavour: "choc chip",
          price: 61,
          url: "https://i.postimg.cc/pLfxnsKK/240-F-60195257-Yb0t1-Gl-L6-Yhb-C0c0bp-Nt06-To-SMAsdg82.jpg",
        },
        {
          id: 3,
          flavour: "banana",
          price: 48,
          url: "https://i.postimg.cc/P55JTGgP/240-F-60195267-o-Usx-A2-V7-UIwng-JNOi2ss-MOSEu-Oj-LMRC1.jpg",
        },
        {
          id: 3,
          flavour: "kiwi",
          price: 25,
          url: "https://i.postimg.cc/bJcqG4B0/240-F-62583240-YUkve-XVAOZC9-Kupg0r-MRXl-C3-S6-AJ2sa-R.jpg",
        },
        {
          id: 5,
          flavour: "orange",
          price: 97,
          url: "https://i.postimg.cc/W1xvKQTR/240-F-63337375-f-KOc-YM95-ZH2-HGld-Jc7nv-Oquxuv5x-TPiz.jpg",
        },
      ])
    );

// // Products page - sample data on a array saved in local storage
// let smoothies =  JSON.parse(localStorage.getItem("smoothies")) ?
// JSON.parse(localStorage.getItem("smoothies")) :
// localStorage.setItem("smoothies",
// JSON.stringify(Smoothies));

//     let smoothiesWrapper = document.querySelector("[data-smoothies]");
//     smoothiesWrapper.innerHtml = ""
//     if(Smoothies){
//     // Loop through smoothies array
// Loop through smoothies array

let smoothiesWrapper = document.querySelector("[data-smoothies]");

function displayProducts(data) {
  smoothiesWrapper.innerHtml = "";
  if (data) {
    data.forEach((item) => {
      smoothiesWrapper.innerHTML += `
        <div class="card" style="width: 15rem; height:20rem;">
            <img src="${item.url}" class="card-img-top" alt="products" >
            <div class="card-body">
                <h5 class="card-title">${item.flavour}</h5>
                <p class="card-text">R${item.price}</p>
                <button href="#" class="btn btn-secondary" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
            </div>
        </div>
        `;
    })
    ;
    addToCart()
  }
  // else {
  //     smoothiesWrapper.innerHtml = "Product not found"
  // }
}

displayProducts(Smoothies);

//     try{
//         let searchWithFlavour = inputSearch.value;
//         let getSmoothies =
//             Smoothies.filter(
//                 item => {
//                     return item.flavour.toLowerCase().
//                     includes(searchWithFlavour)
//                 })
//         displayProducts(getSmoothies)
//         if(!searchWithFlavour) {
//             displayProducts(Smoothies)
//         }
//     }catch(e) {
//         smoothiesWrapper.innerHtml = "Please try again"
//     }
// }

let inputSearch = document.querySelector("[data-search]");

inputSearch.addEventListener("keyup", () => {
  try {
    let itemFound = Smoothies.filter((item) => {
      return item.flavour
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase());
    });
    if (itemFound) {
      smoothiesWrapper.innerHtml = "";
      //
      itemFound.forEach((data) => {
        smoothiesWrapper.innerHTML = `
            <div class="card" style="width: 15rem; height:20rem;">
            <img src="${data.url}" class="card-img-top" alt="products" >
            <div class="card-body">
                <h5 class="card-title">${data.flavour}</h5>
                <p class="card-text">R${data.price}</p>
                <button href="#" class="btn btn-secondary" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>            </div>
        </div>`;
      });
    }else {
        smoothiesWrapper.innerHtml = "Item was not found";
    }
    if(!inputSearch.value) displayProducts(Smoothies)
  } catch (e) {
    ("Please try again late");
  }
});

// document.querySelector('[data-sort]').addEventListener('click',()=>{
//     try{
//         let sortedarray =Smoothies.sort((item1,item2)=>{
//             return item2.price - item1.price
//         })
//         displayProducts(sortedarray)
//         }catch(e){
//             'iiii'
//         }

function sortitems() {
  let sortedarray = Smoothies.sort((item1, item2) => {
      //
      
      
      
 
      
      
      
      console.log(item1, item2);
    return item1.price - item2.price;
  });

  smoothiesWrapper.innerHTML = "";
  sortedarray.forEach((item) => {
    smoothiesWrapper.innerHTML += `
     <div class="card" style="width: 15rem; height:20rem;">
            <img src="${item.url}" class="card-img-top" alt="products" >
            <div class="card-body">
                <h5 class="card-title">${item.flavour}</h5>
                <p class="card-text">R${item.price}</p>
                <button href="#" class="btn btn-secondary" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button></div>`;
  });
}

document.querySelector("[data-sort]").addEventListener("click", sortitems);

//    inputSearch.addEventListener('input',searchitems)

//     Smoothies.sort(price)

// }

let cart = []

function addToCart(item) {
    if(item) {
        cart.push(item)
        localStorage.setItem('checkout', JSON.stringify(cart))
    }
}