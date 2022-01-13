var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;


// set object property value
computer.price = 22000;
console.log(computer);
// console.log(computerPrice);



// different way to set a value of a Object property
// 1st
computer.price = 22000;
// 2nd
computer["price"] = 23000;
// 3rd
var priceProperty = "price";
computer[priceProperty] = 24000;


// 3rd
var storageProperty = 'storage';
computer[storageProperty] = '512gb';
// 2nd
computer['storage'] = '1tb';
// 1st
computer.storage = '5tb';

console.log(computer);


