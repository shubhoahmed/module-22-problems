const phone = [
    { name: 'Samesung', camera: 18, storage: '128gb', price: 32000, color: 'golden' },
    { name: 'Samesung', camera: 9, storage: '128gb', price: 54000, color: 'golden' },
    { name: 'Samesung', camera: 14, storage: '128gb', price: 63254, color: 'golden' },
    { name: 'Samesung', camera: 10, storage: '128gb', price: 5214, color: 'golden' },
    { name: 'Samesung', camera: 11, storage: '128gb', price: 21054, color: 'golden' },
    { name: 'Samesung', camera: 4, storage: '128gb', price: 13054, color: 'golden' },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const index = i;
        const phoneList = phones[index];
        if (phoneList.camera < cheapest.camera) {
            cheapest = phoneList;
        }
    }
    return cheapest;
}
const myRequired = cheapestPhone(phone);
console.log(myRequired);