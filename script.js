const mockDatabase = {
  "users": [
    { "username": "user1", "password": "pass1", "voted": false },
    { "username": "user2", "password": "pass2", "voted": true }
  ],
  "votes": [
    { "option": "Option A", "count": 10 },
    { "option": "Option B", "count": 5 }
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  const welcomeDiv = document.getElementById("welcomePage");
  const loginDiv = document.getElementById("loginPage");
  const dashboardDiv = document.getElementById("dashboardPage");

  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error");

  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const submitVote = document.getElementById("submitVote");

  const resultText = document.getElementById("result");
  const backBtn = document.getElementById("backBtn");

  // Navigation
  document.getElementById("startVoting").addEventListener("click", () => {
    welcomeDiv.style.display = "none";
    loginDiv.style.display = "block";
  });

  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const user = mockDatabase.users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      errorMsg.textContent = "Invalid credentials!";
      return;
    }

    if (user.voted) {
      errorMsg.textContent = "You have already voted!";
      return;
    }

    errorMsg.textContent = "";
    loginDiv.style.display = "none";
    dashboardDiv.style.display = "block";
  });

  submitVote.addEventListener("click", () => {
    const selected = optionA.checked ? "Option A" : optionB.checked ? "Option B" : null;

    if (!selected) {
      alert("Please select an option to vote.");
      return;
    }

    // Update vote count
    const vote = mockDatabase.votes.find((v) => v.option === selected);
    vote.count += 1;

    // Mark user as voted (for simplicity, first matching unvoted user)
    const user = mockDatabase.users.find((u) => !u.voted);
    if (user) user.voted = true;

    resultText.textContent = `You voted for ${selected}. Current Results:\n` +
      mockDatabase.votes.map(v => `${v.option}: ${v.count}`).join("\n");

    optionA.checked = false;
    optionB.checked = false;
    submitVote.disabled = true;
  });

  backBtn.addEventListener("click", () => {
    location.reload();
  });
});
