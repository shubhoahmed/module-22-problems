function add(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        return 'Please, Enter a Number'
    }
    return number1 + number2;
}
const result = add(12, '45');
console.log(result);