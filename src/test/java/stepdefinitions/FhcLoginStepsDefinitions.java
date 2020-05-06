package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import utilities.ConfigurationReader;
import utilities.Driver;

public class FhcLoginStepsDefinitions {
    @Given("user is on the fhctrip login page")
    public void user_is_on_the_fhctrip_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("fhc_login_url"));
    }


    @Given("user enters the valid username and password")
    public void user_enters_the_valid_username_and_password() {
        Driver.getDriver().findElement(By.id("UserName")).sendKeys(ConfigurationReader.getProperty("valid_username"));
        Driver.getDriver().findElement(By.id("Password")).sendKeys(ConfigurationReader.getProperty("valid_password") + Keys.ENTER);
    }
    @Then("verify the login is successful")
    public void verify_the_login_is_successful() {
        Assert.assertTrue(Driver.getDriver().findElement(By.xpath("//span[@class='caption-subject font-green-sharp bold uppercase']")).isDisplayed());

    }

}
