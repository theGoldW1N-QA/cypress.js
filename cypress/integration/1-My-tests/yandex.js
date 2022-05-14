
describe('Тестирование yandex.ru', function () {

    it('Проверка фразы после запроса в yandex', function () {
        cy.visit('https://yandex.ru/');
        cy.get("input[name='text']").type('Котята').type('{enter}');
        cy.contains('Картинки по запросу «Котята»');
        cy.end();
    })
})
