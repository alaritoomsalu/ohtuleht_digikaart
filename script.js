function sendWish() {
    // Get the value from the textarea
    const wish = document.querySelector(".input-field").value;

    // Check if the user entered a wish
    if (!wish.trim()) {
        alert("Palun kirjuta oma soov!");
        return;
    }

    // Show alert
    alert("Sinu soov on saadetud");

    // Clear the textarea
    document.querySelector(".input-field").value = "";

    // Hide the first card and show the second card
    document.querySelector(".first-card").classList.add("hidden");
    document.querySelector(".second-card").classList.remove("hidden");
}