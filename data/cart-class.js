class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;

    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems =
      JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];

    // if (!this.cartItems) {
    //   this.cartItems = [
    //     {
    //       productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    //       quantity: 2,
    //       deliveryOptionId: "1",
    //     },
    //     {
    //       productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    //       quantity: 1,
    //       deliveryOptionId: "2",
    //     },
    //   ];
    // }
  }

  saveToLocalstorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(quantity, productId) {
    let matchingItem;

    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: "1",
      });
    }

    this.saveToLocalstorage();
  }

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (productId !== cartItem.productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;

    this.saveToLocalstorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToLocalstorage();
  }

  addedMessageTimeouts = {};

  showAdded(productId) {
    document
      .querySelector(`.js-added-to-cart-${productId}`)
      .classList.add("show-added");

    const previousTimeoutId = this.addedMessageTimeouts[productId];

    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      document
        .querySelector(`.js-added-to-cart-${productId}`)
        .classList.remove("show-added");
    }, 2000);

    this.addedMessageTimeouts[productId] = timeoutId;
  }

  calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
  }
}

export const cart = new Cart("personal-cart");
