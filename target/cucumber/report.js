$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FluentWaitDemo.feature");
formatter.feature({
  "name": "Fluent wait demo",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Fluent wait example",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the demo page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ExplicitWaitStepDefinitions.user_is_on_the_demo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Start button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ExplicitWaitStepDefinitions.user_clicks_on_the_Start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fluently waits until the page loads and verify the text message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ExplicitWaitStepDefinitions.user_fluently_waits_until_the_page_loads_and_verify_the_text_message()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.ExplicitWaitStepDefinitions.user_fluently_waits_until_the_page_loads_and_verify_the_text_message(ExplicitWaitStepDefinitions.java:50)\r\n\tat ✽.user fluently waits until the page loads and verify the text message(file:///C:/Users/user/IdeaProjects/mycucumberframework/src/test/resources/features/FluentWaitDemo.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});