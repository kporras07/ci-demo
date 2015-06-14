Feature: homepage initial setup
  As an anonymous user, I can go to / see the homepage.

  @homepage
  Scenario: Find 'Welcome to CI-Demo' text in homepage.
     Given I am on homepage
      Then I should see "Welcome to CI-Demo"
