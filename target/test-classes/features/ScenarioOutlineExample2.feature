@datatables5
Feature: scenario outline example
  Scenario Outline: testing the data tables web page
    Given user is ont the datatables home page
    When  user clicks on new button
    And user enters first name "<first name>"
    And user enters last name "<last name>"
    And user enters position "<position>"
    And user enters office "<office>"
    And user enters extension "<extension>"
    And user enters start date "<startDate>"
    And user enters salary "<salary>"
    And user clicks create button
    And user enters fist name "<first name>" on the search box
    Then user should see name "<first name>" on the top of the table

    Examples: Test data for datatables
    |first name|last name|position|office|extension|startDate |salary|
    |Asaf taha |Yilmaz   |sdet    |london|212      |2020-06-01|60000 |
    |Sky       |Walker   |Manager |DC    |221      |2020-04-01|220000 |