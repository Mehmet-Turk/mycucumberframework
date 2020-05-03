$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fhctriplogin.feature");
formatter.feature({
  "name": "Fhc Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@fhcLogin"
    }
  ]
});
formatter.background({
  "name": "user is on the fhc login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the fhc login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginStepsDefinitions.user_is_on_the_fhc_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive test User should login the page with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcLogin"
    }
  ]
});
formatter.step({
  "name": "user enters the valid username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginStepsDefinitions.user_enters_the_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FhcLoginStepsDefinitions.verify_the_login_is_successful()"
});
formatter.result({
  "status": "passed"
});
});