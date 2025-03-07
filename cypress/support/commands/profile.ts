export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'fadskj' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 100,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'ulbi tv',
            avatar: 'akep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            lastName: '1fdjslkf',
        },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname: string, lastname: string,): Chainable<void>
        resetProfile(profileId: string): Chainable<void>
      }
    }
  }
