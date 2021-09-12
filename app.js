// Initialize github and ui class
const github = new GitHub();
const ui = new UI();

// Get the username
const username = document.getElementById("searchUser");

// Event listener for search input
username.addEventListener("keyup", (event) => {
    const userInput = event.target.value;

    if (userInput !== "") {
        github.getUser(userInput).then((user) => {
            if (user.profile.message === "Not Found") {
                ui.showAlert("User not found", "alert alert-danger");
            } else {
                ui.showProfile(user.profile);
                ui.showRepos(user.repos);
            }
        });
    } else {
        ui.clearProfile();
    }
});
