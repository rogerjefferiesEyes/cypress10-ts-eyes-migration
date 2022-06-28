//This is spec file, inside your google-search.spec.ts
import { GoogleSearch } from '../../page-objects/google-search.page';
const search = new GoogleSearch();

describe('Google Navigation', () => {
    beforeEach(() => { 
        cy.eyesOpen({notifyOnCompletion: true, batch: {
            notifyOnCompletion: true
        }});
    });
    it('Google Search',() => {
        cy.visit('https://www.google.com');

        search.googleSearch().type('Something');
        search.googleSearchBtn().click({ force: true });
        search.searchResults().should('be.visible');
        cy.eyesCheckWindow({
            tag: "Google Search - Something",
            target: 'window',
            fully: true
        });
    });
    afterEach('Close Applitools', () => {
        cy.eyesClose();
    });
});