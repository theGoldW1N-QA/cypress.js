
describe('Тестирование корзины staya.ru', function () {

    it('Проверка добавление товара в корзину', function () {
        cy.visit('https://staya.dog/');
        cy.get('.slider--btn').click();
        cy.get('[href="/catalog/dogs/hrn"]').click();
        cy.get(':nth-child(5) > .product-item__cover > .product_preview-single_image > .product_preview-link > .picture-wp > .picture-wp__img').click();
        cy.get('.s-select--caption').click();
        cy.get(':nth-child(1) > .s-option-variant__label > ._o > ._o__det').click();
        cy.get('.block-payment__button > .s-button__content').click();
        cy.get('.cart-modal__actions > .s-button > .s-button__content').click();
        cy.contains('Оформление заказа');
    })
})
