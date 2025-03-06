import { User } from '../../../src/entities/User';

export const setRate = (starsCount = 4, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
      interface Chainable {
        addComment(starsCount: number, feedback: string): Chainable<User>
      }
    }
  }
