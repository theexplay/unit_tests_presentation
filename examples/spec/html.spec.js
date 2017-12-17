var MyHtml = require('../src/html');

describe('MyHtml', () => {
    var myhtml;

    beforeEach(function() {
        myhtml = new MyHtml();
    });

    it('Проверяем имеет ли элемент класс или нет, ожидаем получить bool', () => {
        var el = setFixture('<div class="my-component active">hello world!</div>')

        expect(myhtml.hasClass(el, 'active')).toBeTruthy();
    });
});
