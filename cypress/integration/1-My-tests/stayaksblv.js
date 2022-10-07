describe('Тестирование авторизации staya.dog', function () {
    it('Проверка авторизации + логин + пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('k.osennyaya@icloud.com');
        cy.get('.auth-form > form > [type="password"]').type('W673rx89');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__nav-link').click();
        })
    it('Проверка авторизации + логин - пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('k.osennyaya@icloud.com');
        cy.get('.auth-form > form > [type="password"]').type('w673rx89');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
    it('Проверка авторизации - логин + пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kosennyaya@icloud.com');
        cy.get('.auth-form > form > [type="password"]').type('W673rx89');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
    it('Проверка авторизации - логин - пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kosennyaya@icloud.com');
        cy.get('.auth-form > form > [type="password"]').type('w673rx89');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        })
})
