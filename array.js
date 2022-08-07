//Type check

const country = 'Bangladesh';
const age = 14;
const isIndependent = true;
const friends = [6, 5, 6, 8, 0, 897, 45, 67,];
const students = {
    id: 25,
    name: 'shubho',
    age: 24
}
function add(a, b) {
    return a + b;
}
console.log(typeof (country));
console.log(typeof (age));
console.log(typeof (isIndependent));
console.log(typeof (friends));
console.log(typeof (students));
console.log(typeof (add));
console.log(Array.isArray(friends));