import ElementPO from "../../pageObject/ElementPO"

const element = new ElementPO()
Given("I open the elemten page",()=>{
    element.visit()
})

// TC01
When('Add a new element', () => {
    element.addElement()
})
  
Then('should visible {int} element', (num) => {
    element.countElements(num)
})

// TC02
When('delete the element', () => {
    element.deleteElement()
})

// TC03
When('Add {int} new element', (numElemets) => {
    element.addElements(numElemets)
})

// TC04
When('delete elements', () => {
    element.deleteElements()
})