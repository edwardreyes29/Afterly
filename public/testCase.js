$(document).ready(function () {
    // TEST: setting userId to 1
    const userId = 1 // should be current case
    // TEST DATA:
    // Will be testing sending data from this file from the server.abs
    var nameInput = "Robert Baratheon";
    var birthdayInput = "January 1, 1970";
    var zipCode = 91001;

    // handles input to be submitted to create a new User
    const handleUserFormSubmit = event => {
        event.preventDefault();
        // Call upsertUser and passing the inputs
        createCase({
            name: nameInput,
            birthday: birthdayInput,
            zipCode: zipCode,
            UserId: userId
        });
    }

    // Creates a user.
    const createCase = caseData => {
        $.post("/api/users", caseData);
    }

    handleUserFormSubmit();
});