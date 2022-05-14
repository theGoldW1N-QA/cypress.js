
describe('Тестирование авторизации staya.ru', function () {

    it('Позитивная проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('crumb_93@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Password()123');
        cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Мои заказы');
        cy.end();
    })
})
