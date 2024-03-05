const { continueStatement } = require('@babel/types');
const math = require('../math');
var i = 1

// SOMA *************************************** modificacao double
for(i=1;i<=100;i++) {
    var a = 2*i
    var b = 3+i
    var c = a + b

    test( 'Resultado da SOMA de ' + a + ' + ' + b + ' é ' + c , () => { 
        expect(math.add(a, b)).toBe(a+b); 
        }) 
}
for(i=100;i>=0;i--) {
    var a = 2*i
    var b = 3+i
    var c = a + b

    test( 'Resultado da SOMA de ' + a + ' + ' + b + ' é ' + c , () => { 
        expect(math.add(a, b)).toBe(a+b); 
        }) 
}


// SUBTRACAO **********************************
for(i=1;i<=100;i++) {
    var a = 2*i
    var b = 3+i
    var c = a - b

    test( 'Resultado da SUBTRAÇÃO de ' + a + ' - ' + b + ' é ' + c , () => { 
        expect(math.subtract(a, b)).toBe(a-b); 
        }) 
}

for(i=100;i>=0;i--) {
    var a = 2*i
    var b = 3+i
    var c = a - b

    test( 'Resultado da SUBTRAÇÃO de ' + a + ' - ' + b + ' é ' + c , () => { 
        expect(math.subtract(a, b)).toBe(a-b); 
        }) 
}


// MULTIPLICACAO *************************
for(i=1;i<=100;i++) {
    var a = 2*i
    var b = 3+i
    var c = a * b

    test( 'Resultado da MULTIPLICAÇÃO de ' + a + ' * ' + b + ' é ' + c , () => { 
        expect(math.multiply(a, b)).toBe(a * b); 
        }) 
}

for(i=100;i>=0;i--) {
    var a = 2*i
    var b = 3+i
    var c = a * b

    test( 'Resultado da MULTIPLICAÇÃO de ' + a + ' * ' + b + ' é ' + c , () => { 
        expect(math.multiply(a, b)).toBe(a * b); 
        }) 
}


//DIVISAO *********************************
for(i=1;i<=100;i++) {
    var a = 2*i
    var b = 3+i
    var c = a / b

    test( 'Resultado da DIVISÃO de ' + a + ' / ' + b + ' é ' + c , () => { 
        expect(math.divide(a, b)).toBe(a / b); 
        }) 
}

for(i=100;i>=0;i--) {
    var a = 2*i
    var b = 3+i
    var c = a / b

    test( 'Resultado da DIVISÃO de ' + a + ' / ' + b + ' é ' + c , () => { 
        expect(math.divide(a, b)).toBe(a / b); 
        }) 
}
