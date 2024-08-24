// Class representing a user with a private password
class User {
    #password;  // Private field for storing the user's password

    constructor(userName, password) {
        // Initialize the user with a username and password
        this.userName = userName;
        this.#password = password;
    }

    // Private method to update the user's password
    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    // Public method to reset the user's password
    resetPassword(newPassword) {
        this.#updatePassword(newPassword);  // Call the private method to update the password
        return 'Your password has been updated!';  // Return a confirmation message
    }
}

// Class representing an admin user, which extends the basic User class
class Admin extends User {
    constructor(userName, password) {
        super(userName, password);  // Call the parent User class constructor
        this.isAdmin = true;  // Set the isAdmin property to true for Admin users
    }

    // Public method to delete a user by their username
    deleteUser(userName) {
        return `The user ${userName} deleted!`;  // Return a message confirming user deletion
    }
}
