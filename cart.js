const shoppingCart = [
    { name: 'shoe', price: 12000 },
    { name: 'shirt', price: 3201 },
    { name: 'bag', price: 4102 },
    { name: 'pant', price: 2500 }
];
function totalShoppingCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const totalExpense = totalShoppingCost(shoppingCart);
console.log('My Total Expense:', totalExpense, 'Taka.');