package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target\\cucumber",
//        path of the feature file
        features = "src\\test\\resources\\features",
//        step definitions folder
        glue = "stepdefinitions",
        tags = "@wip",
        dryRun = false //if you do not want to run all codes make it true and get step definitions
)
public class Runner {
}
