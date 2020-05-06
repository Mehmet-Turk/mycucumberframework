package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.FhcLoginPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class FhcLoginSteps {
    FhcLoginPage fhcLoginPage = new FhcLoginPage();
    @Given("user enter valid manager username")
    public void user_enter_valid_manager_username() {
        fhcLoginPage.userName.sendKeys(ConfigurationReader.getProperty("valid_username"));

    }
    @Given("user enter valid manager password")
    public void user_enter_valid_manager_password() {
        fhcLoginPage.password.sendKeys(ConfigurationReader.getProperty("valid_password"));

    }
    @Given("user clicks on login button")
    public void user_clicks_on_login_button() {
        fhcLoginPage.signInButton.click();

    }
    @Then("verify the manager login is successful")
    public void verify_the_manager_login_is_successful() {
        Assert.assertTrue(Driver.getDriver().findElement(By.xpath("//span[@class='caption-subject font-green-sharp bold uppercase']")).isDisplayed());

    }

    @Given("user enter valid manager username {string}")
    public void user_enter_valid_manager_username(String string) {
        fhcLoginPage.userName.sendKeys(string);

    }

    @Given("user enter valid manager password {string}")
    public void user_enter_valid_manager_password(String string) {
        fhcLoginPage.password.sendKeys(string);
    }


}
