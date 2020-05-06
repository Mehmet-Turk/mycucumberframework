package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import pages.GoogleSearchPage;
import utilities.Driver;

public class GoogleSearchStepDefinitions {
    GoogleSearchPage googleSearchPage = new GoogleSearchPage();

    @Given("user is on the google page")
    public void user_is_on_the_google_page() {
        Driver.getDriver().get("https://www.google.com");
    }

    @Given("user searches for iphone")
    public void user_searches_for_iphone() {
        Driver.getDriver().findElement(By.name("q")).sendKeys("iphone"+ Keys.ENTER);
    }

    @Then("verify the result has iphone")
    public void verify_the_result_has_iphone() {
        Assert.assertTrue(Driver.getDriver().getTitle().toLowerCase().contains("iphone"));
    }

    @Given("user clears the searchbox")
    public void user_clears_the_searchbox() {
        Driver.getDriver().findElement(By.name("q")).clear();

    }

    @Given("user searches for teapot")
    public void user_searches_for_teapot() {
        Driver.getDriver().findElement(By.name("q")).sendKeys("tea pot"+ Keys.ENTER);

    }

    @Then("verify the result has teapot")
    public void verify_the_result_has_teapot() {
        Assert.assertTrue(Driver.getDriver().getTitle().toLowerCase().contains("tea pot"));

    }
    @Given("user searches for {string}")
    public void user_searches_for(String string) {
        googleSearchPage.searchBox.sendKeys(string + Keys.ENTER);
    }




    @Then("verify the result has {string}")
    public void verify_the_result_has(String string) {
        System.out.println(Driver.getDriver().getTitle());
        Assert.assertTrue(Driver.getDriver().getTitle().toLowerCase().contains(string));
    }



}
