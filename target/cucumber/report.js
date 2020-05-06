$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FE1200_US2500_google_search_data_tables.feature");
formatter.feature({
  "name": "Single data table",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dataTable"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC01_google search test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "verify the result has \"\u003cvalue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "value"
      ]
    },
    {
      "cells": [
        "iphone"
      ]
    },
    {
      "cells": [
        "s det"
      ]
    },
    {
      "cells": [
        "qa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC01_google search test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dataTable"
    }
  ]
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
formatter.step({
  "name": "user searches for \"iphone\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searches_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"iphone\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_google search test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dataTable"
    }
  ]
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
formatter.step({
  "name": "user searches for \"s det\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searches_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"s det\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_google search test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@dataTable"
    }
  ]
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
formatter.step({
  "name": "user searches for \"qa\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searches_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"qa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});