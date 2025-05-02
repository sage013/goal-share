let secretCode = "1234";  // Default secret code
let storedGoals = [];

function login() {
    const codeInput = document.getElementById('secretCode').value;
    const vaultSection = document.querySelector('.vault-section');
    const loginSection = document.querySelector('.login-section');
    
    if (codeInput === secretCode) {
        loginSection.style.display = "none";
        vaultSection.style.display = "block";
        loadGoals();
    } else {
        alert("Invalid secret code! Try again.");
    }
}

function saveGoal() {
    const goalInput = document.getElementById('goalInput').value;
    
    if (goalInput.trim() !== "") {
        storedGoals.push(goalInput);
        localStorage.setItem('goals', JSON.stringify(storedGoals));
        loadGoals();
        document.getElementById('goalInput').value = ''; // Clear input
    } else {
        alert("Please enter a goal!");
    }
}

function loadGoals() {
    const goalsList = document.getElementById('goalsList');
    goalsList.innerHTML = '';  // Clear the list before reloading
    
    const stored = JSON.parse(localStorage.getItem('goals'));
    if (stored && stored.length > 0) {
        storedGoals = stored;
        storedGoals.forEach(goal => {
            const goalDiv = document.createElement('div');
            goalDiv.textContent = goal;
            goalsList.appendChild(goalDiv);
        });
    }
}
