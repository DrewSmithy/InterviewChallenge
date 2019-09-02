var challengePage = {}
module.exports = {
    beforeEach: browser => {
        challengePage = browser.page.Challenge1Page()
        challengePage
            .navigate()
    },
    after: browser => {
        challengePage
            .end()
    },
    'Challenge Test Here': browser => {
        // Your Challenge is to create a test to iterate through all employees on Employee-
        // Manager version 1.2 and check their Name, Phone and title, you have a test file 
        // and a Page Object file already set up for you to work with.

        // You will also need to Create a custom command that will allow you to use one 
        // selector to move through all employees.
    }
}