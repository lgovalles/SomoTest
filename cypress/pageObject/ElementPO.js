
class ElementPO {

    visit(){
        cy.visit("/add_remove_elements/")
    }

    addElement(){
        const element = cy.get("button[onclick='addElement()']")
        element.click()
    }

    addElements(numElemets){
        const element = cy.get("button[onclick='addElement()']")
        for (let i = 0; i < numElemets; i++) {
            element.click()
        }
        
    }

    deleteElement(){
        const element =  cy.get('#elements').find('button')
        element.click()
    }

    deleteElements(){
        const elements =  cy.get('#elements').find('button')
        elements.each(($els) => {
            $els.click()
        })
        
    }
    
    countElements(numElemets){
        cy.get('#elements').find('button').should('have.length', numElemets)
    }
    
}
export default ElementPO;