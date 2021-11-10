/* eslint-disable no-undef */

describe('Home page', function() {
  before(() => {
    cy.visit('http://localhost:3000')
  })
    it('front page can be opened', function() {      
      cy.contains('Huong Nguyen')
      cy.contains('Full-stack Developer')
    })

    it('About page can be navigated to', function () {
      cy.contains('About').click()
      cy.location('pathname').should('eq', '/about')
      cy.contains('About Me')
    })

    it('Projects page can be navigated to', function () {
      cy.contains('Projects').click()
      cy.location('pathname').should('eq', '/projects')
      cy.contains('My Work')
      cy.contains('Demo').click()
    })

    it('Contact page can be navigated to and submit the form successfully', function () {
      cy.contains('Contact').click()
      cy.location('pathname').should('eq', '/contact')
      cy.contains('Get in Touch')
      cy.get('input[name="name"]').type('Amy')
      cy.get('input[name="user_email"]').type('amyng@gmail.com')
      cy.get('textarea').type('Hello, Nice to meet you !')
      cy.get('button').contains('Send').click()
    })
})