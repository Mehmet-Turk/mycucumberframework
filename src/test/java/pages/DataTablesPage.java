package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DataTablesPage {
    public DataTablesPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "//button[@class='dt-button buttons-create']")
    public WebElement newButton;
    @FindBy(xpath = "//input[@type='search']")
    public WebElement searchBox;
    @FindBy(id = "DTE_Field_first_name")
    public WebElement firstNameBox;
    @FindBy(id = "DTE_Field_last_name")
    public WebElement lastNameBox;
    @FindBy(id = "DTE_Field_position")
    public WebElement positionBox;
    @FindBy(id = "DTE_Field_office")
    public WebElement officeBox;
    @FindBy(id = "DTE_Field_extn")
    public WebElement extensionBox;
    @FindBy(id = "DTE_Field_start_date")
    public WebElement startDateBox;
    @FindBy(id = "DTE_Field_salary")
    public WebElement salaryBox;
    @FindBy(xpath = "//button[@class='btn']")
    public WebElement createButton;

    public WebElement cellFinder(int row, int column){
        return Driver.getDriver().findElement(By.xpath("//tbody//tr["+row+"]//td["+column+"]"));
    }


}
