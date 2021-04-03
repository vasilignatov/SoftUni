// function inventory(input) {
//     result = [];
//     for(let line of input){
//         let [name, level, items] = line.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', ') : [];
//         result.push({name, level, items})
//     }
//     return JSON.stringify(result)



function inventory(input){
    let result = [];
    input.forEach(x => {
        let [name, level, items] = x.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items})
    });
    return JSON.stringify(result);
}
console.log(inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log(inventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]));