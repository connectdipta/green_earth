
                                          // CATEGORIES

fetch("https://openapi.programming-hero.com/api/categories")
 .then(res => res.json())
 .then(data => {
    let categories = data.categories;

    const categoryContainer = document.getElementById("categoryContainer");
    categoryContainer.innerHTML= "";

    categories.forEach((element) => {

        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
           <p onclick="loadTreeCard(${element.id})"
              id = "ID-${element.id}"
              class="text-[#1f2937] m-2 px-3 py-2 rounded cursor-pointer hover:bg-green-600 active:bg-gray-200 transition duration-200 shadow-sm hover:shadow-lg categoryBtn transform hover:-translate-y-1">
        ${element.category_name}
      </p>
        `;
    categoryContainer.appendChild(btnDiv);
    });
 });

                          // show all plants
 allCards();

// Adding highlight to categories button and show category wise plant
function loadTreeCard(id) {
     
    // Highlight Category
    const allCategoryBtn = document.getElementsByClassName("categoryBtn");
    for (let btn of allCategoryBtn) {
        btn.classList.remove("bg-sky-400");
    }
    const clickBtn = document.getElementById(`ID-${id}`);
    clickBtn.classList.add("bg-sky-400");


  // Show Category wise Card

    const url = `https://openapi.programming-hero.com/api/category/${id}`;
     fetch(url)
    .then(resp => resp.json())
    .then(particular => {
    let oneCategory = particular.plants;

    const specific = document.getElementById("cards");
    specific.innerHTML= "";

    oneCategory.forEach((trees) => {

        const specificDiv = document.createElement("div");
        specificDiv.innerHTML = `
            <div class="p-3 w-84 bg-white rounded-lg shadow-lg"
                  id="Tree-${trees.id}">
                    <img src="${trees.image}" alt="" class="w-full h-50 rounded-lg shadow-sm object-cover">
                    <p onclick="displayModal(${trees.id})"
                       class="text-sm font-semibold my-3 cursor-pointer transition duration-200 ease-in-out hover:text-blue-500 active:scale-95">${trees.name}</p>
                    <p class="text-[#1f2937] text-xs mb-3 line-clamp-2">${trees.description}</p>

                    <div class="flex justify-between">
                        <a class="btn text-[#15803D] bg-[#DCFCE7] rounded-full border-none shadow-none h-7">${trees.category}</a>
                        <p>৳<span>${trees.price}</span></p>
                    </div>
                    <a onclick="displayCartAdded(${trees.price}, '${trees.name}')"
                      class="btn text-white bg-[#15803d] hover:bg-[#166534] active:bg-[#14532d] rounded-full border-none shadow-none mt-3 w-full transition-colors duration-200">
                        Add to Cart
                      </a>
                </div>
        `;
    specific.appendChild(specificDiv);
    });
  });
};


                          // show all plants function
function showLoading() {
  const loading = document.getElementById("loading");
  loading.classList.remove("hidden");
  loading.classList.add("flex");
}

function hideLoading() {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.classList.add("hidden");
    loading.classList.remove("flex");
  }
}

async function allCards() {
    // show loading
    showLoading();

    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const tree = await res.json();
    let allTrees = tree.plants;

    const allCards = document.getElementById("cards");
    allCards.innerHTML = "";

    allTrees.forEach((trees) => {
      const treeDiv = document.createElement("div");
      treeDiv.innerHTML = `
        <div class="p-3 w-84 bg-white rounded-lg shadow-lg" id="Tree-${trees.id}">
          <img src="${trees.image}" alt="" class="w-full h-50 rounded-lg shadow-sm object-cover">
          <p onclick="displayModal(${trees.id})"
            class="text-sm font-semibold my-3 cursor-pointer transition duration-200 ease-in-out hover:text-blue-500 active:scale-95">${trees.name}</p>
          <p class="text-[#1f2937] text-xs mb-3 line-clamp-2">${trees.description}</p>

          <div class="flex justify-between">
            <a class="btn text-[#15803D] bg-[#DCFCE7] rounded-full border-none shadow-none h-7">${trees.category}</a>
            <p>৳<span>${trees.price}</span></p>
          </div>
          <a onclick="displayCartAdded(${trees.price}, '${trees.name}')"
            class="btn text-white bg-[#15803d] hover:bg-[#166534] active:bg-[#14532d] rounded-full border-none shadow-none mt-3 w-full transition-colors duration-200">
            Add to Cart
          </a>
        </div>
      `;
      allCards.appendChild(treeDiv);
    });

    // hide loading
    hideLoading(); 
}
                          //  MODAL

function displayModal(ID) {
  const urlModal = `https://openapi.programming-hero.com/api/plant/${ID}`;
  fetch(urlModal)
    .then(resp => resp.json())
    .then(modal => {
      let oneModal = modal.plants;

      const modalDetails = document.getElementById("modal_details");
      modalDetails.innerHTML = `
        <p class="text-xl font-semibold mb-2">${oneModal.name}</p>
        <img class="h-65 w-full rounded-xl object-cover" src="${oneModal.image}" alt="">
        <p class="font-bold mt-2">Category:<span class="font-normal text-sm ml-2">${oneModal.category}</span></p>
        <p class="font-bold">Price:<span class="font-normal text-sm ml-2">৳${oneModal.price}</span></p>
        <p class="font-bold">Description:<span class="font-normal text-sm ml-2">${oneModal.description}</span></p>
        `;

      document.getElementById("my_modal_5").showModal();

      
    });
};

                           //  CART

let transactions = [];

// Calculate Total Money
function calculateTotal(){
  let total = 0;

  for (let item of transactions) {
  total += item.price;
     }
  console.log(total);
  return total;
};


// Cards And Total Will updated
function setTransactions() {
  const allTransactionCard = document.getElementById("transactionsCards");
  allTransactionCard.innerHTML = ``;

  transactions.forEach((data, index) => {
    const singleTransaction = document.createElement("div");
    singleTransaction.innerHTML = `
      <div class="flex justify-between items-center bg-[#F0FDF4] rounded shadow p-3 my-2">
        <div>
          <p class="text-[#1f2937] text-xs font-semibold mb-1">${data.name}</p>
          <p class="text-[#8C8C8C] text-sm font-normal">৳ <span>${data.price}</span> x 1</p>
        </div>
        <button onclick="removeItem(${index})"
          class="p-2 rounded hover:bg-gray-200 active:bg-gray-300 transition">
          <i class="fa-solid fa-xmark text-[#8C8C8C] text-xs font-normal"></i>
        </button>
      </div>
    `;
    allTransactionCard.appendChild(singleTransaction);
  });

  // update total money
  const allTotal = document.getElementById("total");
  allTotal.innerHTML = `${calculateTotal()}`;
}

// Add Items in Cart
function displayCartAdded(addPrice, addName) {
  const data = {
    name: addName,
    price: addPrice
  };

  transactions.push(data);
  setTransactions();
}

// Remove Item
function removeItem(index) {
  transactions.splice(index, 1);
  setTransactions();
}

// Extra
function congratulate(){
  alert(`🌱 Thank you for your generous donation! 
    You've just planted hope for a greener tomorrow. 💚`);
};