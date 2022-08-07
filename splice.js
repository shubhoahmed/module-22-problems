const friend = [23, 53, 12, 13, 87, 97, 35, 36,];
const partial = friend.splice(2, 5, 555, 777, 666);// it change original array
console.log(partial);
console.log(friend);