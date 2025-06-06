document.getElementById('addButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('sumResult').textContent = `Sum: ${num1 + num2}`;
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('loginResult').textContent = `Logged in as ${username}`;
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
        "Use === instead of == for strict comparison.",
        "Always declare variables with let or const.",
        "Use template literals for easier string manipulation.",
        "Avoid using global variables."
    ];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tipDisplay').textContent = tip;
});
