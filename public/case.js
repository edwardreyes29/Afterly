$(document).ready(function () {
    // TEST DATA:
    // Will be testing sending data from this file from the server.abs
    var nameInput = "Robert Baratheon";
    var birthdayInput = { month: 6, day: 20, year: 1980 };
    var zipCode = 91001;

    // handles input to be submitted to create a new User
    const handleUserFormSubmit = event => {
        event.preventDefault();
        // Call upsertUser and passing the inputs
        upsertUser({
            name: nameInput,
            birthday: birthdayInput,
            zipCode: zipCode
        });
    }

    // Creates a user.
    const upsertUser = userData => {
        $.post("/api/users", userData);
    }

    handleUserFormSubmit();
});