package stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class Hooks {
    @Before(order = 1)//it runs before all and every each one of scenario
    public void setUp(){
        System.out.println("This is setUp Method in the Hooks");
        //Driver.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    @Before(value = "@iphone", order = 2)//it runs before certain scenarios
    public void setUpIphoneTest(){
        System.out.println("This is setUpIphone Method in the Hooks");
    }
    @After
    public void tearDown(Scenario scenario){
        System.out.println("This is tear down method i Hooks class");
        //it takes screen hots and works on TestNG and cucumber framework
        final byte [] screenshot = ((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        if (scenario.isFailed()) {
            scenario.embed(screenshot, "image/png");
        }
        Driver.closeDriver();
    }
}
