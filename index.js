const jwt = require("jsonwebtoken");
const secret = 'Gp81YLUpE}-i_%"k}jpq-/w.dWKTbyPf!c>-G~sB0Rac=4+c[hF78!&u3W7umF[';

let payload = {
    iss: "PAULO SAMPAIO",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(1),
    aud: 'Curso Udemy',
    name: "Paulo Henrique Sales Sampaio",
    email: "paulohenrique.sales47@gmail.com",
    admin: true
};

var token = jwt.sign(payload, secret, {algorithm: 'HS512'});

console.log(token);