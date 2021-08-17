import Common from "./common"

class LoginPO extends Common{

    data = ""

    getData(){
        cy.fixture("loginData.json").then((data) => {
                console.log(data)
                this.data = data
        });
        console.log(this.data)
    }
    
    visit(){
        cy.visit("/login")
    }

    typeyUser(){
        const login_input = cy.get("#username")
        login_input.type(this.data.user)
    }

    typeyIncorrectUser(){
        const login_input = cy.get("#username")
        login_input.type("UserTest")
    }

    typePassword(){
        const pass_input = cy.get("#password")
        pass_input.type(this.data.password)
    }


    clickOnLogin(){
        const logout = cy.get("button.radius")
        logout.click()
    }

    assertIncorrectPassword(){
        const asset_login = cy.get("[data-alert]")
        asset_login.should("be.visible").and("contain",this.data.passInvalid)
    }

    assertIncorrectUser(){
        const asset_login = cy.get("[data-alert]")
        asset_login.should("be.visible").and("contain",this.data.userInvalid)
    }

    asserLogin(){
        cy.url().should('include', 'secure')
        cy.get("[data-alert]").should("be.visible")
        cy.get("[data-alert]").should("contain",this.data.loginCorrect)
        
    }
}

export default LoginPO;