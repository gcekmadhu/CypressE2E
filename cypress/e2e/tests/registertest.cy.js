import { RegisterPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerObj=new RegisterPage();

describe("Ecommerce",()=>{

    it("Register",()=>{
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPassword(registerData.password)
        registerObj.confirmPrivacyPolicy();
        registerObj.continue();

    })
})