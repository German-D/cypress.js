
describe('Главная гугла. Проверка, что в выдаче есть тесла', function () {
   it('search something', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('tesla').type('{enter}');
        cy.contains('https://www.tesla.com');
    })
})
