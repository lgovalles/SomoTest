Feature: Verify the correct funcionality of login page 

  I want to open the login page and type the user and password, 
    if those are correct should open the main page. 

  Scenario: Login wint a user is not register in the system 
    Given I open the login page
    When type a user that is not already registered
    Then should show an user error message
  
  Scenario: Login wint a user and password alredy in the system 
    Given I open the login page
    When type the user and password 
    Then Should open the main page 

  Scenario: Login wint a incorret password 
    Given I open the login page
    When type the user
    Then should show an password error message
  
  
  
  
  
  