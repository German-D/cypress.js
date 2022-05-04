
describe('Тестирование dolnikov.ru', function () {

    it('Проверка, что при переходе в статью урл будет верный', function () {
        cy.visit('https://dolnikov.ru/blog/');
        cy.contains('Про образование').click();
        cy.url().should('eq', 'https://dolnikov.ru/blog/all/pro-obrazovanie/')
    })
})
