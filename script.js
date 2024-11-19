function sendWish() {
    // Get the value from the textarea
    const wish = document.querySelector(".input-field").value;

    // Check if the user entered a wish
    if (!wish.trim()) {
        alert("Palun kirjuta oma soov!");
        return;
    }

    // Track the wish event in Google Analytics
    gtag("event", "wish_sent", {
        event_category: "Engagement",
        event_label: "Wish Submission",
        value: 1,
    });

    // Clear the textarea and switch cards
    document.querySelector(".input-field").value = "";
    document.querySelector(".first-card").classList.add("hidden");
    document.querySelector(".second-card").classList.remove("hidden");
}