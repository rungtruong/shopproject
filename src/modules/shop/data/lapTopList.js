const lt_macbook = require('../assets/img/lt_macbook.png');
const lt_rog = require('../assets/img/lt_rog.png');
const lt_hp = require('../assets/img/lt_hp.png');
const lt_lenovo = require('../assets/img/lt_lenovo.png');



let laptopList = [
    {
        id: 'sp_1',
        name: 'Macbook',
        price: '30.000.000 VNĐ',
        img: lt_macbook,
        desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your p' +
            'assword'
    }, {
        id: 'sp_2',
        name: 'Asus Rog',
        price: '20.000.000 VNĐ',
        img: lt_rog,
        desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
    }, {
        id: 'sp_3',
        name: 'HP Book',
        price: '10.000.000 VNĐ',
        img: lt_hp,
        desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
    }, {
        id: 'sp_4',
        name: 'Lenovo Thinkpad',
        price: '15.000.000 VNĐ',
        img: lt_lenovo,
        desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
    }
]

export default laptopList;