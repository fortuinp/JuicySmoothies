let yr = new Date().getFullYear();

document.getElementById("Curryearr").textContent = "Juicy Smoothies est." + yr;
let smoothies = JSON.parse(localStorage.getItem("smoothies"))
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

let smoothiesWrapper = document.querySelector("[data-smoothies]");
let searchInput = document.querySelector("[data-search]");
let sortingBtn = document.querySelector("[data-sort]");

function displaySmoothies(data) {
  smoothiesWrapper.innerHTML = "";
  try {
    if (data) {
      data.forEach((item) => {
        smoothiesWrapper.innerHTML += `
        <div class="card"">
          <img src="${item.url}" class="card-img-top" alt="${item.flavour}">
          <div class="card-body">
            <h5 class="card-title">${item.flavour}</h5>
            <p class="card-text">R${item.price}</p>
            <a type="button" id="btncontact" class="btn btn-primary" onclick='addToCart(${JSON.stringify(
              item
            )})'>Add to cart</a>
          </div>
        </div>
        `;
      });
    } else {
      smoothiesWrapper.innerHTML = `
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      `;
    }
  } catch (e) {
    smoothiesWrapper.innerHTML = "Please contact our admin (Pinda)";
  }
}
displaySmoothies(smoothies);

searchInput.addEventListener("keyup", () => {
  try {
    if (!searchInput.value) displaySmoothies(smoothies);
    let findItems = smoothies.filter((item) => {
      return item.flavour
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    });
    if (findItems) {
      displaySmoothies(findItems);
    } else {
      smoothiesWrapper.innerHTML = "Item was not found";
    }
  } catch (e) {
    smoothiesWrapper.innerHTML = "Please try again later";
  }
});

sortingBtn.addEventListener("click", () => {
  try {
    let sortedItems = smoothies.sort(
      (item1, item2) => item1.price - item2.price
    );
    displaySmoothies(sortedItems);
  } catch (e) {
    smoothiesWrapper.innerHTML = "Please try again later";
  }
});

let cart = JSON.parse(localStorage.getItem("checkout")) || [];

function addToCart(item) {
  if (item) {
    cart.push(item);
    localStorage.setItem("checkout", JSON.stringify(cart));
  }
}


