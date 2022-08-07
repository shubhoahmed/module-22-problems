const shoppingCart = [
    { name: 'shoe', price: 12000, quantity: 2 },
    { name: 'shirt', price: 3201, quantity: 1 },
    { name: 'bag', price: 4102, quantity: 3 },
    { name: 'pant', price: 2500, quantity: 5 },
];
function totalShoppingCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productQuantity = product.price * product.quantity;
        sum = sum + productQuantity;
    }
    return sum;
}
const totalExpense = totalShoppingCost(shoppingCart);
console.log('My Total Expense:', totalExpense, 'Taka.');