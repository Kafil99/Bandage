import { Product } from "../../../types/products";

export const addToCart = (product: Product) => {
    try {
      // Retrieve and parse cart data from localStorage
      let cartData = localStorage.getItem("cart");
  
      // Ensure cart is an array
      let cart: Product[] = cartData ? JSON.parse(cartData) : [];
  
      // Check if parsed data is an array, if not, reset it
      if (!Array.isArray(cart)) {
        cart = [];
      }
  
      // Find existing product index in the cart
      const existingProductIndex = cart.findIndex(item => item._id === product._id);
  
      if (existingProductIndex !== -1) {
        // Increase quantity if product exists
        cart[existingProductIndex].inventory += 1;
      } else {
        // Add new product with inventory set to 1
        cart.push({ ...product, inventory: 1 });
      }
  
      // Save updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  

export const removeFromCart = (productId : string) => {
    let cart : Product[] =JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart' , JSON.stringify('cart')) 
};

export const updateCartQuantity = (productId : string , quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex(item =>item._id === productId);

    if(productIndex > -1){
        cart[productIndex].inventory = quantity
    }
};

export const getCartItems = () : Product[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}