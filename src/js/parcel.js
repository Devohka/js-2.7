const email = document.querySelector("[data-email]");
const title = document.querySelector("[data-title]");
const text = document.querySelector("[data-text]");
const nameEl = document.querySelector("[data-name]");
const btn = document.querySelector("[data-btn]");




btn.addEventListener("click", (e) => {
    e.currentTarget
    
        const user = {
            name: nameEl.value,
            text: text.value,
            email: email.value
        };
        title.textContent = "Успішне відправлення";
});


