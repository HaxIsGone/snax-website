const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Switch icon
    if (document.body.classList.contains("light")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }

    // save preference
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

// load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggle.textContent = "☀️";
}
