let yr = new Date().getFullYear();
document.getElementById("Curryearr").textContent = "Juicy Smoothies est." + yr;

let adminContent = document.getElementById("data-table-admin");

function adminTable() {
  try {
    let Smoothies = JSON.parse(localStorage.getItem("smoothies"));

    Smoothies.forEach((item, i) => {
      console.log(item.flavour);
      adminContent.innerHTML += `<tr>
        <td><img src='${item.url}'  alt="${item.flavour}" ></td>
        <td>${item.flavour}</td>
        <td>R${item.price}</td>
        <td>
        <div class= "col">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-pencil"></i>
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Update form</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">


              <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product ID</label>
    <input type="text" class="form-control" id="new-id${item.id}" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="new-flavour${item.id}" class="form-label">Product Flavour</label>
    <input type="text" class="form-control" value=${item.flavour} id="new-flavour${item.id}" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="new-price${item.id}" class="form-label">Product Price</label>
    <input type="text" class="form-control" value=${item.price} id="new-price${item.id}" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="new-url${item.id}" class="form-label">Product Url</label>
    <input type="url" class="form-control" value=${item.url} id="new-url${item.id}" aria-describedby="emailHelp">

  </div>

</form>


              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary onclick='new UpdateItems(${JSON.stringify(
                  item
                )})">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button><i class="bi bi-trash"></i></button>
        </div>
        </td>
        </tr>
        
        `;
    });
  } catch {
    e;
  }
}
adminTable();

function UpdatItems(item) {
  this.id = item.id,
    this.flavour = document.querySelector(`new-flavour$`),
    (this.price = document.querySelector(`new-price$`))
    (this.url = document.querySelector(`new-url$`))
    
    let updateArray = [];
    let newItem = new UpdateItems();
    updateArray.push(newItem)
}
