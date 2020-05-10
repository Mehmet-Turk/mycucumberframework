$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/firstfeaturefile.feature");
formatter.feature({
  "name": "Google search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googlesearch"
    }
  ]
});
formatter.background({
  "name": "User is on the google page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User searches iphone on google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googlesearch"
    },
    {
      "name": "@iphone"
    }
  ]
});
formatter.step({
  "name": "user searches for iphone",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searches_for_iphone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has iphone",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_iphone()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_iphone(GoogleSearchStepDefinitions.java:27)\r\n\tat ✽.verify the result has iphone(file:///C:/Users/user/IdeaProjects/mycucumberframework/src/test/resources/features/firstfeaturefile.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is on the google page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User searches tea pot on google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googlesearch"
    },
    {
      "name": "@teapot"
    }
  ]
});
formatter.step({
  "name": "user searches for teapot",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searches_for_teapot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has teapot",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_teapot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});