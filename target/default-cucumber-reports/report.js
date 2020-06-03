$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/JdbcTesting.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.background({
  "name": "user is on the google page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user connects to the database",
  "keyword": "Given "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.user_connects_to_the_database()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_User verified the table data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    }
  ]
});
formatter.step({
  "name": "user connects the Book Table",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.user_connects_the_Book_Table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "prints the first value on BookName",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.prints_the_first_value_on_BookName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the BookName values on the Book Table",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.print_the_BookName_values_on_the_Book_Table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the total row count",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.print_the_total_row_count()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the 5th value is Java",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.verify_the_5th_value_is_Java()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the 1st value is SQL",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.verify_the_1st_value_is_SQL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the last value is UIPath",
  "keyword": "And "
});
formatter.match({
  "location": "DBSteps.DBStepDefinitions.verify_the_last_value_is_UIPath()"
});
formatter.result({
  "status": "passed"
});
});