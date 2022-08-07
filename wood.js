// 1. chair = 3 cft 
// 1. table = 10 cft 
// 1. bed = 50 cft 
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}
const totalWoodResult = woodCalculator(5, 3, 2);
console.log('Total Quantity of Wood: ', totalWoodResult, 'cft');
