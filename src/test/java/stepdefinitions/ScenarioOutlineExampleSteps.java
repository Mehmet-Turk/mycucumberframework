package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.DataTablesPage;
import utilities.Driver;

public class ScenarioOutlineExampleSteps {
    DataTablesPage dataTablesPage = new DataTablesPage();
    @Given("user is ont the datatables home page")
    public void user_is_ont_the_datatables_home_page() {
        Driver.getDriver().get("https://editor.datatables.net/");
    }

    @When("user clicks on new button")
    public void user_clicks_on_new_button() {
        dataTablesPage.newButton.click();

    }
    @When("user enters first name")
    public void user_enters_first_name() {
        dataTablesPage.firstNameBox.sendKeys("Mehmet");
    }
    @When("user enters last name")
    public void user_enters_last_name() {
        dataTablesPage.lastNameBox.sendKeys("Turk");
    }
    @When("user enters position")
    public void user_enters_position() {
        dataTablesPage.positionBox.sendKeys("Senior Sdet");
    }
    @When("user enters office")
    public void user_enters_office() {
        dataTablesPage.officeBox.sendKeys("London");
    }
    @When("user enters extension")
    public void user_enters_extension() {
        dataTablesPage.extensionBox.sendKeys("No extension");
    }
    @When("user enters start date")
    public void user_enters_start_date() {
        dataTablesPage.startDateBox.sendKeys("2020-06-01");
    }
    @When("user enters salary")
    public void user_enters_salary() {
        dataTablesPage.salaryBox.sendKeys("50000");
    }
    @Then("user clicks create button")
    public void user_clicks_create_button() {
        dataTablesPage.createButton.click();
    }
    @When("user enters fist name on the search box")
    public void user_enters_first_name_on_the_search_box() {
        dataTablesPage.searchBox.sendKeys("Mehmet"+ Keys.ENTER);
    }

    @Then("user should see name on the top of the table")
    public void user_should_see_name_on_the_top_of_the_table() {
        Assert.assertTrue(dataTablesPage.cellFinder(1, 2).getText().contains("Mehmet"));
    }

    @When("user enters first name {string}")
    public void user_enters_first_name(String string) {
        dataTablesPage.firstNameBox.sendKeys(string);
    }

    @When("user enters last name {string}")
    public void user_enters_last_name(String string) {
        dataTablesPage.lastNameBox.sendKeys(string);

    }

    @When("user enters position {string}")
    public void user_enters_position(String string) {
        dataTablesPage.positionBox.sendKeys(string);
    }

    @When("user enters office {string}")
    public void user_enters_office(String string) {
        dataTablesPage.officeBox.sendKeys(string);

    }

    @When("user enters extension {string}")
    public void user_enters_extension(String string) {
        dataTablesPage.extensionBox.sendKeys(string);
    }

    @When("user enters start date {string}")
    public void user_enters_start_date(String string) {
        dataTablesPage.startDateBox.sendKeys(string);
    }

    @When("user enters salary {string}")
    public void user_enters_salary(String string) {
        dataTablesPage.salaryBox.sendKeys(string);
    }

    @When("user enters fist name {string} on the search box")
    public void user_enters_fist_name_on_the_search_box(String string) {
        dataTablesPage.searchBox.sendKeys(string);
    }

    @Then("user should see name {string} on the top of the table")
    public void user_should_see_name_on_the_top_of_the_table(String string) {
        Assert.assertTrue(dataTablesPage.cellFinder(1, 2).getText().contains(string));

    }


}
