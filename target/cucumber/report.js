$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ScenarioOutlineExample2.feature");
formatter.feature({
  "name": "scenario outline example",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatables5"
    }
  ]
});
formatter.scenarioOutline({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is ont the datatables home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters first name \"\u003cfirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters extension \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters start date \"\u003cstartDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks create button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters fist name \"\u003cfirst name\u003e\" on the search box",
  "keyword": "And "
});
formatter.step({
  "name": "user should see name \"\u003cfirst name\u003e\" on the top of the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for datatables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "position",
        "office",
        "extension",
        "startDate",
        "salary"
      ]
    },
    {
      "cells": [
        "Asaf taha",
        "Yilmaz",
        "sdet",
        "london",
        "212",
        "2020-06-01",
        "60000"
      ]
    },
    {
      "cells": [
        "Sky",
        "Walker",
        "Manager",
        "DC",
        "221",
        "2020-04-01",
        "220000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables5"
    }
  ]
});
formatter.step({
  "name": "user is ont the datatables home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_is_ont_the_datatables_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_clicks_on_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters first name \"Asaf taha\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters last name \"Yilmaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_last_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters position \"sdet\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters extension \"212\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters start date \"2020-06-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_start_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters salary \"60000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_clicks_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters fist name \"Asaf taha\" on the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_fist_name_on_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see name \"Asaf taha\" on the top of the table",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_should_see_name_on_the_top_of_the_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables5"
    }
  ]
});
formatter.step({
  "name": "user is ont the datatables home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_is_ont_the_datatables_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_clicks_on_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters first name \"Sky\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters last name \"Walker\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_last_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters position \"Manager\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters office \"DC\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters extension \"221\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters start date \"2020-04-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_start_date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters salary \"220000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_clicks_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters fist name \"Sky\" on the search box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_enters_fist_name_on_the_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see name \"Sky\" on the top of the table",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenarioOutlineExampleSteps.user_should_see_name_on_the_top_of_the_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});