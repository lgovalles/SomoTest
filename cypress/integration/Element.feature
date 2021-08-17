Feature: Add/Remove Elements
    In order to add and remove elemtens
    As a user
    I want add and remove elemtens 

Scenario: Add element
    Given I open the elemten page 
    When Add a new element 
    Then should visible 1 element

Scenario: Delete element
    Given I open the elemten page 
    When Add a new element 
        And delete the element
    Then should visible 0 element

Scenario: Add elements
    Given I open the elemten page 
    When Add 10 new element 
    Then should visible 10 element

Scenario: Delete elements
    Given I open the elemten page 
    When Add 10 new element 
        And delete elements
    Then should visible 0 element
    