import 'cypress-pipe';

describe('App E2E', () => {
  it('should change theme to rain', () => {
    cy.visit('/');
    cy.get('#themeSwitcher2')
      .click()
      .then(() => {
        cy.window()
          .its('store')
          .invoke('getState')
          .should('deep.equal', {
            mainPage: {
              theme: 'rain',
              currentUser: '',
              calendarItems: [],
              city: '',
              weatherInDays: [],
              weatherInHours: [],
              weatherSwitcher: true,
            },
            _persist: { version: -1, rehydrated: true },
          });
      });
  });
  it('should send city to the state after the blur', () => {
    cy.visit('/');
    cy.get('#city')
      .type('Minsk')
      .blur()
      .then(() => {
        cy.window()
          .its('store')
          .invoke('getState')
          .should('deep.equal', {
            mainPage: {
              theme: 'snow',
              currentUser: '',
              calendarItems: [],
              city: 'Minsk',
              weatherInDays: [],
              weatherInHours: [],
              weatherSwitcher: true,
            },
            _persist: { version: -1, rehydrated: true },
          });
      });
  });
});
