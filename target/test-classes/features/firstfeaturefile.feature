Feature:Google search
  Background: User is on the google page
  Given user is on the google page
#  it runs before all methods
#  it is because it is common for all methods
  @iphone
  Scenario: User searches iphone on google
    And user searches for iphone
    Then verify the result has iphone
  @teapot
  Scenario: User searches tea pot on google
    And user searches for teapot
    Then verify the result has teapot