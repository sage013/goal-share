let currentCode = "";

function login() {
  const inputCode = document.getElementById("codeInput").value.trim();
  if (!inputCode) return;

  const accessKey = `access_${inputCode}`;
  let accessCount = parseInt(localStorage.getItem(accessKey)) || 0;

  if (accessCount >= 2) {
    document.getElementById("loginMessage").innerText = "This code is already used by 2 users.";
    document.getElementById("loginMessage").style.display = "block";
    return;
  }

  // Allow access
  accessCount += 1;
  localStorage.setItem(accessKey, accessCount);

  currentCode = inputCode;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("goal-section").style.display = "block";
  loadGoals();
}

function addGoal() {
  const goalText = document.getElementById("goalInput").value.trim();
  if (!goalText) return;

  const goalsKey = `goals_${currentCode}`;
  const goals = JSON.parse(localStorage.getItem(goalsKey)) || [];

  goals.push(goalText);
  localStorage.setItem(goalsKey, JSON.stringify(goals));
  document.getElementById("goalInput").value = "";
  loadGoals();
}

function loadGoals() {
  const goalsKey = `goals_${currentCode}`;
  const goals = JSON.parse(localStorage.getItem(goalsKey)) || [];

  const goalList = document.getElementById("goalList");
  goalList.innerHTML = "";
  goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalList.appendChild(li);
  });
}
