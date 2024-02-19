var header = "";
header = `
 <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 " data-bs-theme="dark">
            <a class="navbar-brand " href="index.html"><h3 class="display-6"><b>amazon</b>.in</h3></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item nav-underline">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item nav-underline ">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item nav-underline">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item nav-underline  dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div class="container">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 text-bg-light" type="search" placeholder="Search" aria-label="Search">&nbsp&nbsp
                        <button class="btn btn-warning  px-5  " type="submit">Search</button>&nbsp&nbsp&nbsp&nbsp
                            <a href="cart.html" class="nav-link border border-light text-bg-light   border-1 px-3 py-3 rounded-3 btn   "><i
                                    class="fa-solid fa-cart-plus fs-3"></i>
                                    <h6 class="count" id="count">0</h6>
                                    </a> 
                    </form>
                </div>
            </div>
        </nav>
 `
document.getElementById('header').innerHTML = header;
var products = [
    { img: "asset/images/1.jpg", name: "Lady-Coat", dise: " Lorem ipsum dolor sit dignissimos?", price: "$230", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/2.jpg", name: "Black-Gray", dise: " Lorem ipsum dolor sit dignissimos?", price: "$290", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/3.jpg", name: "Formal-Blezer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$149", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/4.jpg", name: "Imrodery-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$599", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/5.jpg", name: "Checks-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$240", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/6.jpg", name: "Winter-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$199", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/7.jpg", name: "Pattern-Shirt", dise: " Lorem ipsum dolor sit dignissimos?", price: "$349", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/8.jpg", name: "Blazer-Pink", dise: " Lorem ipsum dolor sit dignissimos?", price: "$249", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/9.jpg", name: "Lether-Black_Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$399", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/10.jpg", name: "Party-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$499", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/11.jpg", name: "Casual-Kurta", dise: " Lorem ipsum dolor sit dignissimos?", price: "$249", Limited: "Limited Time Offer", btn: "Add to Cart" },
    { img: "asset/images/12.jpg", name: "lather-Blazer", dise: " Lorem ipsum dolor sit dignissimos?", price: "$299", Limited: "Limited Time Offer", btn: "Add to Cart" }
]

var productHtml = "";

products.forEach((products, i) => {
    productHtml += ` <div class=" col-md-3 mt-4 mb-3  text-center ">
                <div class="card">
                <div class="cards">
                    <div class="overflow-hidden">
                        <img src="${products.img}" class="pr object-fit-cover" height="300px"alt="">
                    </div>
                    <h3>${products.name} </h3>
                    <p class="text-secondary fs-5">${products.dise}</p>
                    <h4 class="text-dark fw-bolder   ">${products.price}</h4>
                    <button class="btn btn-danger" onclick="AddCart(${[i]})">${products.btn}</button>
                     <span class="text-danger fs-4 fw-bold  ">${products.offer}}</span><span class="offer text-bg-danger ">${products.Limited}</span>
                </div>
            </div>
            
        </div>`
});
document.getElementById('cadr-list').innerHTML = productHtml;



function AddCart(id) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart"));
    var name=products[id].name;
    var object = {
        name: name,
        price: products[id].price,
        img: products[id].img,
        qnty: 1
    }
    if (cart == null) {
        cart = [];
        cart.push(object)
    }

    var findIndex = cart.findIndex((item) => item.name == name)
    if (findIndex != -1) {
        cart[findIndex].qnty++

    }else{

        cart.push(object)
        count()
        
    }
    localStorage.setItem("shoppingCart", JSON.stringify(cart))
    count()
}
count()

function count(){
    let demo = JSON.parse(localStorage.getItem("shoppingCart"))
    document.getElementById("count").innerHTML=demo.length;
}
function onload(){
    count()
}
