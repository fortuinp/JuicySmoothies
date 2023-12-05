// products
//https://i.postimg.cc/j5wDFRs0/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl-removebg-preview.png...red
//https://i.postimg.cc/K8dh82Xf/61783418-l-1024x683.jpg ..initial
//https://i.postimg.cc/zDFn0N5Q/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl.jpg strawberry
//https://i.postimg.cc/pLfxnsKK/240-F-60195257-Yb0t1-Gl-L6-Yhb-C0c0bp-Nt06-To-SMAsdg82.jpg choc chip
//https://i.postimg.cc/P55JTGgP/240-F-60195267-o-Usx-A2-V7-UIwng-JNOi2ss-MOSEu-Oj-LMRC1.jpg banana
//https://i.postimg.cc/bJcqG4B0/240-F-62583240-YUkve-XVAOZC9-Kupg0r-MRXl-C3-S6-AJ2sa-R.jpg kiwi
//https://i.postimg.cc/W1xvKQTR/240-F-63337375-f-KOc-YM95-ZH2-HGld-Jc7nv-Oquxuv5x-TPiz.jpg orange
//https://i.postimg.cc/sx5mjGZ9/240-F-63637648-Ge5ay-KEBx5-Gkr-FNg6g-Iaig-Lw-Hnqla8th.jpg red orange

let yr= new Date().getFullYear();

document.getElementById('Curryearr').textContent= "Juicy Smoothies est."+yr

let Smoothies= [
    {
        id:1,
        flavour:"strawberry",
        price:50,
        url:("https://i.postimg.cc/zDFn0N5Q/240-F-59738474-5-NTSry-Zt-Ri-Zejj4d-Upj-Qhssiga-Erqinl.jpg")
    },
    {
        id:2,
        flavour:"choc chip",
        price:49,
        url:("https://i.postimg.cc/pLfxnsKK/240-F-60195257-Yb0t1-Gl-L6-Yhb-C0c0bp-Nt06-To-SMAsdg82.jpg")
    },
    {
        id:4,
        flavour:"banana",
        price:48,
        url:("https://i.postimg.cc/P55JTGgP/240-F-60195267-o-Usx-A2-V7-UIwng-JNOi2ss-MOSEu-Oj-LMRC1.jpg")
    },
    {
        id:5,
        flavour:"kiwi",
        price:45,
        url:("https://i.postimg.cc/bJcqG4B0/240-F-62583240-YUkve-XVAOZC9-Kupg0r-MRXl-C3-S6-AJ2sa-R.jpg")
    },
    {
        id:6,
        flavour:"orange",
        price:47,
        url:("https://i.postimg.cc/W1xvKQTR/240-F-63337375-f-KOc-YM95-ZH2-HGld-Jc7nv-Oquxuv5x-TPiz.jpg")
    }
    
]

// Products page - sample data on a array saved in local storage
let smoothies =  JSON.parse(localStorage.getItem("smoothies")) ?
JSON.parse(localStorage.getItem("smoothies")) :
localStorage.setItem("smoothies",
JSON.stringify(Smoothies));


    let smoothiesWrapper = document.querySelector("[data-smoothies]");
    smoothiesWrapper.innerHtml = ""
    if(Smoothies){
    // Loop through smoothies array



    Smoothies.forEach(Smoothies => {
        smoothiesWrapper.innerHTML += `
        <div class="card" style="width: 15rem; height:20rem;">
  <img src="${Smoothies.url}" class="card-img-top" alt="products" >
  <div class="card-body">
    <h5 class="card-title">${Smoothies.flavour}</h5>
    <p class="card-text">R${Smoothies.price}</p>
    <a href="#" class="btn btn-secondary">Add to Cart</a>
  </div>
</div>
        `
    });
    }

    function sortItems() {
        Smoothies.sort(price)
    
    }
    document.querySelector('[data-sort]').addEventListener('click', sortItems)