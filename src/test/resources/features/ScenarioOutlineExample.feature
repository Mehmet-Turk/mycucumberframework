@datatables3
Feature: scenario outline example
  Scenario: testing the data tables web page
    Given user is ont the datatables home page
    When  user clicks on new button
    And user enters first name
    And user enters last name
    And user enters position
    And user enters office
    And user enters extension
    And user enters start date
    And user enters salary
    Then user clicks create button

  Scenario: verification of data entrance
    Given user is ont the datatables home page
    When user enters fist name on the search box
    Then user should see name on the top of the table