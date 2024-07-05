describe('MySQL Database Test', () => {
  it('should query the database', () => {
    cy.task('queryDatabase', { query: 'SELECT 1 + 1 AS solution' }).then((results) => {
      expect(results[0].solution).to.equal(2);
    });
  });
});
