import Api from "../services/api.js";
import { renderProductList, renderCart } from "../controllers/controller.js";
import CartItem from "../models/productCart.js";

const api = new Api();
const getEle = (id) => document.getElementById(id);

const getListProduct = () => {
    api
        .callApi("data", "get", null)
        .then((result) => renderProductList(result))
        .catch((err) => console.log(err));
};
getListProduct();
// function search
const searchProductByName = async (productName) => {
    try {
        
        const products = await api.callApi("data", "get", null);
        const filterProducts = products.filter((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase()),
        );
       renderProductList(filterProducts);
        
    } catch (err) {
        console.log(err);
    }
};

getEle("btn_search").addEventListener("click", () => {
    const searchInput = getEle("search-box").value;
    const productName = searchInput;

    if (productName.trim() !== "") {
        searchProductByName(productName);
    }
});

let cart = [];

const btnAddToCart = (id) => {
   api.callApi(`data/${id}`, "GET", null)
   .then((res) => {
        let index = cart.findIndex(item => item.product.id === id);

        if(index < 0){
            let newItem = new CartItem (res, 1);
            cart.push(newItem);
        } else{
            cart[index].quantity += 1;
        }
        renderCart(cart);
    }).catch((err) => {
        console.log(err);
    })
}
window.btnAddToCart = btnAddToCart;

const btnRemove =(id) => {
    let index = cart.findIndex((item) => item.product.id ===id);
    cart.splice(index, 1);
    renderCart(cart);
}
window.btnRemove = btnRemove;


