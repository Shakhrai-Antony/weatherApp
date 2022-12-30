describe('App E2E', () => {
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
              time: '',
              date: '',
              weatherInDaysError: '',
              weatherInHoursError: '',
              isFetching: false,
            },
            _persist: { version: -1, rehydrated: true },
          });
      });
  });
});
