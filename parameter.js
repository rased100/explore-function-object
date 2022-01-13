function bringSingara(taka) {
    console.log('singra er jonno', taka);
    console.log('Mama singara den');
    var singataPrice = 10;
    var singaraQuantity = taka / singataPrice;
    return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
console.log('Ai nen singara', singara);