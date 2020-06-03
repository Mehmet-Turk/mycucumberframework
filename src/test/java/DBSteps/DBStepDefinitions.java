package DBSteps;

import io.cucumber.java.en.Given;
import org.junit.Assert;

import java.sql.*;

public class DBStepDefinitions {
    String url = "jdbc:mysql://107.182.225.121:3306/LibraryMgmt";
    String username = "techpro";
    String password = "tchpr2020";
    Connection connection;
    Statement statement;
    ResultSet resultSet;
    @Given("user connects to the database")
    public void user_connects_to_the_database() throws SQLException {
        connection = DriverManager.getConnection(url, username, password);
        statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);

    }

    @Given("user connects the Book Table")
    public void user_connects_the_Book_Table() throws SQLException {
        resultSet = statement.executeQuery("SELECT * FROM Book;");
    }

    @Given("prints the first value on BookName")
    public void prints_the_first_value_on_BookName() throws SQLException {
        resultSet.next();
        String firstRowValue = resultSet.getString("BookName");
        System.out.println("The first value on row 1 is: " + firstRowValue);
    }

    @Given("print the BookName values on the Book Table")
    public void print_the_BookName_values_on_the_Book_Table() throws SQLException {
        while (resultSet.next()){
            System.out.println(resultSet.getRow()+ "==>" + resultSet.getString("BookName"));
        }
    }

    @Given("print the total row count")
    public void print_the_total_row_count() throws SQLException {
        resultSet.last();
        System.out.println("The number of row: " + resultSet.getRow());
    }

    @Given("verify the 5th value is Java")
    public void verify_the_5th_value_is_Java() throws SQLException {
        resultSet.absolute(5);
        String rowFifthvalue = resultSet.getString("BookName");
        Assert.assertEquals(rowFifthvalue, "Java");
    }

    @Given("verify the 1st value is SQL")
    public void verify_the_1st_value_is_SQL() throws SQLException {
        resultSet.first();
        String firstRowData = resultSet.getString("BookName");
        Assert.assertEquals(firstRowData, "SQL");
    }

    @Given("verify the last value is UIPath")
    public void verify_the_last_value_is_UIPath() throws SQLException {
        resultSet.last();
        String lastRowData = resultSet.getString("BookName");
        Assert.assertEquals(lastRowData, "UIPath");
    }

}
