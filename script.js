document.getElementById('addButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('sumResult').textContent = `Sum: ${num1 + num2}`;
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult').textContent = `Logged in as ${username}`;

     if (username === "Bond" && password === "007") {
                loginResult.textContent = "Correct. Logging you in...";
            } else {
                loginResult.textContent = "Username or password are incorrect.";
            }
});

document.getElementById('weatherSelect').addEventListener('change', (e) => {
    const adviceMap = {
        sunny: "Wear sunscreen!",
        rainy: "Take an umbrella.",
        windy: "Wear a jacket.",
        snowy: "Stay warm!"
    };
    document.getElementById('weatherAdvice').textContent = adviceMap[e.target.value];
});

document.getElementById('tipButton').addEventListener('click', () => {
    const tips = [
            "🔍 Use `console.log()` for debugging.",
            "💡 `===` is safer than `==` — always use strict equality!",
            "🚀 Arrow functions do not bind their own `this`.",
            "🧼 Keep your code clean with meaningful variable names.",
            "⏳ `setTimeout(fn, 0)` can defer execution without blocking.",
            "🔁 `forEach` does not support `break`; use a regular loop if needed.",
            "🎯 Prefer `const` and `let` over `var` for modern JS.",
            "🧠 Closures can help you create private variables in JS.",
            "🌐 `fetch()` is a promise-based way to get data from APIs.",
            "📦 Use template literals (\`\`) for clean multi-line strings."
    ];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tipDisplay').textContent = tip;
});
