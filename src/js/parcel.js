const email = document.querySelector("[data-email]");
const title = document.querySelector("[data-title]");
const text = document.querySelector("[data-text]");
const nameEl = document.querySelector("[data-name]");
const btn = document.querySelector("[data-btn]");


btn.addEventListener("click", (e) => {
    e.currentTarget
    const user = {
        name: `${nameEl}`,
        text: `${text}`,
        email: `${email}`
    };
    title.textContent = "Успішне відправлення";
});