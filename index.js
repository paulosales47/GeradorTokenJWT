const jwt = require("jsonwebtoken");
const secret = 'Gp81YLUpE}-i_%"k}jpq-/w.dWKTbyPf!c>-G~sB0Rac=4+c[hF78!&u3W7umF[';

//20 minutos
let exp = Math.floor(Date.now() / 1000) + (60 * 20);

let payload = {
    iss: "PAULO SAMPAIO",
    iat: new Date().getSeconds(),
    exp: exp,
    aud: 'Curso Udemy',
    name: "Paulo Henrique Sales Sampaio",
    email: "paulohenrique.sales47@gmail.com",
    admin: true
};

var token = jwt.sign(payload, secret, {algorithm: 'HS512'});
console.log(token);
