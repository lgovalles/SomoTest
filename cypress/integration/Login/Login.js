import LoginPO from "../../pageObject/LoginPO"

const login = new LoginPO()
before(()=>{
  login.getData()
  console.log("before")
})

Given("I open the login page", () => {
  login.visit()
})

// TC01
When('type a user that is not already registered', () => {
  login.typeyIncorrectUser();
  login.typePassword();
  login.clickOnLogin();
})

Then('should show an user error message', () => {
  login.assertIncorrectUser()
})

// TC02
When('type the user and password', () => {
  login.typeyUser();
  login.typePassword();
  login.clickOnLogin();
})

Then('Should open the main page', () => {
  login.asserLogin()
})

// TC03
When('type the user', () => {
  login.typeyUser();
  login.clickOnLogin();
})

Then('should show an password error message', () => {
  login.assertIncorrectPassword()
})



