const StorageManager = function(){
    _products = [{name:"Milk", img: "https://pngimg.com/uploads/milk/milk_PNG12746.png",price:5},{name:"Cheese",img: "http://pngimg.com/uploads/cheese/cheese_PNG25336.png", price:10}]

    const addProduct = function(product){
        _products.push(product)
    }

    const getProducts = function(){
        return _products;
    }

    return {
        add: addProduct,
        get: getProducts
    }
} 



const CartManager = function(){
    _cart = [{name:"Milk", amount:5, price:5},{name:"Cheese", price:10, amount:2}]

    const addProduct = function(product){
        for(i=0;i<_cart.length;i++)
       {
        if(_cart[i].name === product.name)
        {
                _cart[i].amount +=1
                return;
        }
       }
        _cart.push({name:product.name, amount:1, price:product.price})
    }
    const removeProduct = function(product){
        
       for(i=0;i<_cart.length;i++)
       {
        if(_cart[i].name === product)
        {
            if(_cart[i].amount > 1)
            {
                _cart[i].amount -=1
            }
            else{
            _cart.splice(i, 1)
            break;
            }
        }
       }
    }

    const getCart = function(){
        return _cart;
    }

    return {
        add: addProduct,
        remove:removeProduct,
        get: getCart
    }
} 

const storage = StorageManager()
const cart = CartManager()



const render_products= function(){
    const body_cont = document.getElementById("body-container")
    body_cont.innerHTML =''
    const prodCont = document.createElement("div")
    prodCont.setAttribute("id", "product-container");
    body_cont.appendChild(prodCont)
    

    for (const product of storage.get()) {
        const divProd = document.createElement("div")
        divProd.setAttribute("class", "product")
        const productName = document.createElement("div")
        const productImg = document.createElement("img")
        const productPrice = document.createElement("div")
        const productAdd = document.createElement("button")
        productAdd.setAttribute("class","Add")
        productImg.src = product.img
        productImg.setAttribute("class","img")
        productAdd.innerText = "Add to cart"
        productAdd.onclick = () => cart.add(product)
        productName.innerText = product.name
        productPrice.innerText = product.price + "$"
        divProd.appendChild(productName)
        divProd.appendChild(productImg)
        divProd.appendChild(productPrice)
        divProd.appendChild(productAdd)
        prodCont.appendChild(divProd)
        
    }
}


const render_about = function(){
    document.getElementById("body-container").innerHTML = "<h1>About me</h1> <h3>Welcome to Andalus' Digital Emporium</h3>    <p>        Greetings! I'm Andalus, the mastermind behind the pixels and code that bring this digital marketplace to life. Step into the heart of technology and creativity where your online shopping experience takes center stage.    </p>        <h3>Let's Connect and Innovate!</h3>    <p>        I'm not just a developer; I'm a partner in your online journey.  Your feedback and ideas are not just welcomed; they're essential in shaping the future of this website.    </p>        <p>        Thank you for choosing to explore Andalus' Digital Emporium. Let's make your online shopping experience extraordinary together! </p>"
}
const render_cart = function(){
    const body_cont = document.getElementById("body-container")
    body_cont.innerHTML = '';
    const prodCont = document.createElement("div");
    prodCont.setAttribute("id", "cart-container");
    body_cont.appendChild(prodCont);
    const displayCart = ()=> {
    for (const product of cart.get()) {
        const divProd = document.createElement("div")
        divProd.setAttribute("class", "product")
        const productName = document.createElement("div")
        const productPrice = document.createElement("div")
        const productAmount = document.createElement("div")
        const productAdd = document.createElement("button")
        productAdd.innerText = "Remove"
        productAdd.setAttribute("class","Remove")
        productAdd.onclick = () => {cart.remove(product.name); prodCont.innerHTML = '';displayCart();}
        productName.innerText = product.name
        productAmount.innerText = product.amount
        productPrice.innerText = product.price*product.amount + "$"
        divProd.appendChild(productName)
        divProd.appendChild(productPrice)
        divProd.appendChild(productAmount)
        divProd.appendChild(productAdd)
        prodCont.appendChild(divProd)
        
    }
    }
    displayCart();
}

document.getElementById("cart").onclick = render_cart
document.getElementById("about").onclick = render_about
document.getElementById("products").onclick = render_products
