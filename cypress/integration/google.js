
describe('Главная гугла. Проверка, что в выдаче есть тесла', function () {
    
    it('search something', function () {
        cy.visit('https://staya.dog/');
        cy.contains('input', 'Поводки').click();
        // cy.url().should('eq', 'https://staya.dog/catalog/dogs/lsh')
        cy.contains('Heatwave');
        cy.end();
         })

     it('search something', function () {
        cy.visit('https://staya.dog/');
        })
})
