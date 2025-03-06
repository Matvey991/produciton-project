import { getByTestId } from 'cypress/support/commands/common';

let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'new';
        const newlastname = 'lastname';
        cy.updateProfile(newName, newlastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newlastname);
    });
});
