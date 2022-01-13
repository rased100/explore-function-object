var skycolor = 'white';

var phones = ['iphone', 'xiaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('oppo is missing')
}

// lg is available
if (phones.indexOf('lg') != -1) {
    console.log('lg is available now');
}