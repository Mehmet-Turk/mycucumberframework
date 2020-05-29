@datatables4 @smoketest
Feature: scenario outline example
  Scenario: testing the data tables web page
    Given user is ont the datatables home page
    When  user clicks on new button
    And user enters first name "first name"
    And user enters last name "last name"
    And user enters position "Sdet"
    And user enters office "London"
    And user enters extension "123"
    And user enters start date "2020-06-01"
    And user enters salary "60000"
    And user clicks create button
    And user enters fist name "first name" on the search box
    Then user should see name "first name" on the top of the table