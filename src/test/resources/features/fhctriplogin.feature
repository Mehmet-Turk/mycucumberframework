@fhcLogin
Feature: Fhc Login
  Background: user is on the fhc login page
    Given user is on the fhctrip login page

   Scenario: Positive test User should login the page with valid credentials
     Given user enters the valid username and password
     Then verify the login is successful