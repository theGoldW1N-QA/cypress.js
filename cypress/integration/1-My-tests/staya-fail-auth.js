
describe('Тестирование неудачной авторизации staya.ru', function () {

    it('Проверка авторизации с некорректным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('crumb_93@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('123456');
        cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.end();
    })
})
