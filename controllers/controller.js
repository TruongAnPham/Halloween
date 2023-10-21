const getEle = (id) => document.getElementById(id);
 
  /**
   * FUNCTION RENDER PHONE LIST
  */
const renderProductList =  (productArr) => {
    let content = "";
     for (let i = 0; i < productArr.length; i++) {
        let ele = productArr[i];
         content += ` <div class="trick__content">
         <img src=${ele.image} alt="" class="trick__img">
         <h3 class="trick__title">${ele.name}</h3>
         <span class="trick__subtitle">${ele.title}</span>
         <span class="trick__price">$${ele.price}</span>
         <button class="button trick__button" onclick ="btnAddToCart(${ele.id})">
             <i class='bx bx-cart-alt trick__icon'></i>
         </button>
         <div class="trick-body">
             <p class="trick-body-subtitle">${ele.name}</p>
             <p class="trick-body-info">${ele.description}</p>
         </div>
     </div>

         `;
        }
        getEle("renderProduct").innerHTML = content;
    };


/**
 * RENDER CART
 */
const renderCart = (cart) => {
    let content = "";
    cart.forEach((ele) => {
      content += `<div class="cart_item">
      <div class="remove_item" onclick ="btnRemove(${ele.id})">
          <span>&times;</span>
      </div>
      <div class="item_img">
          <img src=${ele.product.image} alt="">
      </div>
      <div class="item_details">
          <p>${ele.product.name}</p>
          <strong>$${ele.product.price}</strong>
          <div class="qty">
              <span>-</span>
              <strong>1</strong>
              <span>+</span>
          </div>
      </div>
  </div>`;
    });
    getEle("cart_items").innerHTML = content;
  
    /**
     * Total Phone
     */
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.quantity;
    });
    // const uiTotal = totalCart(cart);
    // const shipping = uiTotal > 0 ? 50 : 0;
    getEle("items_num").innerHTML = cartCount;
    // getEle("shipping").innerHTML = "$" + shipping;
    // getEle("subTotal").innerHTML = "$" + uiTotal;
    // getEle("tax").innerHTML = "$" + Math.floor(uiTotal * 0.1);
    // getEle("priceTotal").innerHTML = "$" + Math.floor(uiTotal * 1.1 + shipping);
  };

  export{ renderProductList, renderCart };