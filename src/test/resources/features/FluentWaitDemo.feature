@wip
Feature: Fluent wait demo
  Scenario: Fluent wait example
    Given user is on the demo page
    And user clicks on the Start button
    And user fluently waits until the page loads and verify the text message
