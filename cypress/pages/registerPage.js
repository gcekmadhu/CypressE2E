export class RegisterPage {
    weblocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        privacyPolicy: "input[type=\"checkbox\"]",
        continue: ".btn.btn-primary"
    }
    async openUrl() {
        await cy.visit(Cypress.env('url'))
    }
    enterFirstName(fn) {
        cy.get(this.weblocators.firstName).type(fn)
    }
    enterLastName(ln) {
        cy.get(this.weblocators.lastName).type(ln)
    }
    enterEmail(emailId) {
        cy.get(this.weblocators.email).type(emailId)
    }
    enterTelephone(ph) {
        cy.get(this.weblocators.telephone).type(ph)
    }
    enterPassword(pwd) {
        cy.get(this.weblocators.password).type(pwd)
    }
    enterConfirmPassword(pwd) {
        cy.get(this.weblocators.confirmPassword).type(pwd)
    }
    confirmPrivacyPolicy() {
        cy.get(this.weblocators.privacyPolicy).check();
    }
    continue() {
        cy.get(this.weblocators.continue).click();
    }
}