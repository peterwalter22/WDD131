document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme");
    const body = document.body;
    const logo = document.querySelector(".footer .logo");

    function changeTheme() {
        const selectedTheme = themeSelector.value;
        if (selectedTheme === "dark") {
            body.classList.add("dark");
            logo.src = "./byui-logo-white.webp";
        } else {
            body.classList.remove("dark");
            logo.src = "./byui-logo.webp";
        }
    }

    themeSelector.addEventListener("change", changeTheme);
});
