const products = [
    {name:"rice", price:"5$",quantity:5,image:"Images/rice.jpeg"},
    {name:"potato", price:"5$",quantity:5,image:"Images/potato.jpeg"},
    {name:"Meat", price:"5$",quantity:5,image:"Images/Meat.jpeg"},
    {name:"Milk", price:"5$",quantity:5,image:"Images/milk.jpeg"},
  ];

const mainContent = document.getElementById("main-container");

const createCards = (products) =>{
    const cardProduct = document.createElement("div");
    const nameProduct = document.createElement("h2");
    const priceProduct = document.createElement("p");
    const quantityProduct = document.createElement("p");
    const imageProduct = document.createElement("img");
    const btnAddToCard = document.createElement("button");

    nameProduct.textContent = products.name;
    priceProduct.textContent = products.price;
    quantityProduct.textContent = products.quantity;
    imageProduct.setAttribute("src",products.image);
    imageProduct.setAttribute("alt",products.name);
    
    btnAddToCard.textContent = "add to card";

    cardProduct.classList.add();

    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(imageProduct);
    cardProduct.appendChild(priceProduct);
    cardProduct.appendChild(quantityProduct);
    cardProduct.appendChild(btnAddToCard);

    mainContent.appendChild(cardProduct);

}

function renderCards(){
    products.map((element)=>{return createCards(element)})
    createCards(productS);
}

window.addEventListener("DOMContentLoaded",renderCards)