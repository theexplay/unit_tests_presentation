var MyMath = require('../src/app');

describe('MyMath', () => {
    var mymath;

    beforeEach(function() {
        mymath = new MyMath();
    });

    it('Инкрементируем число на 1', () => {
        expect(mymath.increment(2)).toEqual(3);
    });

    it('Ожидаем получить произведение двух чисел', () => {
        expect(mymath.pow(2, 2)).toEqual(4);
    });

    it('сумму всех аргументов', () => {
        expect(mymath.sum(2, 2, 6)).toEqual(10);
    });
});
