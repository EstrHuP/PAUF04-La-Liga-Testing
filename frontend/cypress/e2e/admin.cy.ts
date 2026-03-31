describe('Login con admin', () => {
  it('Admin inicia sesión', () => {
    cy.visit('/login');
    cy.get('input[name=email').type('admin');
    cy.get('input[name=password]').type('a');
    cy.get('button[type=submit').click();
  });
  
  it('Admin accede a lista jugadores', () => {
    cy.visit('/players'); // ruta de tu app

    cy.contains('Búsqueda de jugadores').should('be.visible');

    cy.get('#playersList .player-card').should('have.length', 4);

    cy.contains('.player-card', 'Elena Suarez').should('be.visible');
    cy.contains('.player-card', 'Carlos Gonzalez').should('be.visible');
    cy.contains('.player-card', 'Manuel Sevilla').should('be.visible');
    cy.contains('.player-card', 'Sara Pérez').should('be.visible');
  })
})