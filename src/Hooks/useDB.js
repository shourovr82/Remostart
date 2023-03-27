const getStoredItem = (key) => JSON.parse(localStorage.getItem(key)) || {};
// to store an object

const setItem = (id) => {
    const shoppingCart = getStoredItem('shopping-cart');
    const quantity = shoppingCart[id];

    shoppingCart[id] = quantity ? quantity + 1 : 1;

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};
export { setItem, getStoredItem };

// const getStoredItem = (key) => {
//     let shoppingCart = {};
//     const storedCart = JSON.parse(localStorage.getItem(key));
//     shoppingCart = storedCart || {};

//     return shoppingCart;
// };
// const setItem = (id) => {
//     let productsCart = {};
//     const storedCart = getItem('shopping-cart');
//     if (storedCart) {
//         productsCart = storedCart;
//     }

//     const quantity = productsCart[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         productsCart[id] = newQuantity;
//     } else {
//         productsCart[id] = 1;
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(productsCart));
// };
// export default setItem;

// for single item
// const setItem = (id) => {
//     let quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = +quantity + 1;
//         localStorage.setItem(id, newQuantity);
//     } else {
//         quantity = 1;
//         localStorage.setItem(id, quantity);
//     }
// };
// export default setItem;
