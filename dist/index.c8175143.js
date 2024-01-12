const email = document.querySelector("[data-email]");
const title = document.querySelector("[data-title]");
const text = document.querySelector("[data-text]");
const nameEl = document.querySelector("[data-name]");
const btn = document.querySelector("[data-btn]");
btn.addEventListener("click", (e)=>{
    e.currentTarget;
    const user = {
        name: `${nameEl}`,
        text: `${text}`,
        email: `${email}`
    };
    title.textContent = "\u0423\u0441\u043F\u0456\u0448\u043D\u0435 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F";
});

//# sourceMappingURL=index.c8175143.js.map
