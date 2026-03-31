describe('Ejecuciones como admin', () => {
  // Login
  it('Admin inicia sesión', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('admin');
    cy.get('input[name=password]').type('a');
    cy.get('button[type=submit').click();
    cy.url().should('include', '/index_admin');
  });

  // Nuevo partido
  it('Admin crea un nuevo partido', () => {
    cy.visit('/index_admin');
    cy.get('input[name=equipo1').type('testEquipo1Cypress');
    cy.get('input[name=equipo2').type('testEquipo2Cypress');
    cy.get('input[name=arbitro').type('testArbitroCypress');
    cy.get('input[name=ubicacion').type('testUbiCypress');
    cy.get('button[type=submit').click();
    cy.get('td').should('contain', 'testEquipo1Cypress');

    // Validación visual: 
    // - se ve la tabla 
    // - aparece la fila con el dato nuevo
    cy.contains('h3', 'Partidos existentes').should('be.visible');
    cy.get('table.table').should('be.visible');
    cy.contains('tbody tr', 'testEquipo1Cypress').should('be.visible');
  });

  // Editar partido
  it('Admin edita un partido', () => {
    cy.visit('/index_admin');
    cy.get('tbody tr').eq(2).within(() => { // Edita el equipo local de la tercera fila
      cy.contains('button', 'Editar').click(); // busca boton editar
      cy.get('input').first().clear().type('Equipo Local Editado'); //edita el field de equiop local
      cy.contains('button', 'Guardar').click(); // guarda
      cy.contains('button', 'Cancelar').click(); // cancela el evento
    });
    // Validación visual: 
    // - se ve la fila editada
    cy.contains('h3', 'Partidos existentes').should('be.visible');
    cy.get('table.table').should('be.visible');
    cy.contains('tbody tr', 'Equipo Local Editado').should('be.visible');
  });

  // Accede al listado de jugadores
  it('Admin accede a lista jugadores', () => {
    cy.visit('/players');

    cy.contains('Búsqueda de jugadores').should('be.visible');

    cy.get('#playersList .player-card').should('have.length', 4);

    cy.contains('.player-card', 'Elena Suarez').should('be.visible');
    cy.contains('.player-card', 'Carlos Gonzalez').should('be.visible');
    cy.contains('.player-card', 'Manuel Sevilla').should('be.visible');
    cy.contains('.player-card', 'Sara Pérez').should('be.visible');
  })
})