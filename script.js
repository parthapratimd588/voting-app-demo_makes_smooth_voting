document.addEventListener('DOMContentLoaded', () => {
  const mockData = [
    { name: "Amit", email: "amit@example.com", party: "Party A" },
    { name: "Sneha", email: "sneha@example.com", party: "Party B" },
    { name: "Raj", email: "raj@example.com", party: "Party A" },
    { name: "Priya", email: "priya@example.com", party: "Party C" },
    { name: "Kabir", email: "kabir@example.com", party: "Party B" },
    { name: "Neha", email: "neha@example.com", party: "Party A" },
    { name: "Aditya", email: "aditya@example.com", party: "Party A" },
    { name: "Divya", email: "divya@example.com", party: "Party C" },
    { name: "Yash", email: "yash@example.com", party: "Party B" },
    { name: "Riya", email: "riya@example.com", party: "Party A" },
    { name: "Tanvi", email: "tanvi@example.com", party: "Party B" },
    { name: "Harsh", email: "harsh@example.com", party: "Party A" },
    { name: "Isha", email: "isha@example.com", party: "Party C" },
    { name: "Vikram", email: "vikram@example.com", party: "Party B" },
    { name: "Megha", email: "megha@example.com", party: "Party C" },
    { name: "Arjun", email: "arjun@example.com", party: "Party A" },
    { name: "Simran", email: "simran@example.com", party: "Party B" },
    { name: "Rohan", email: "rohan@example.com", party: "Party A" },
    { name: "Pooja", email: "pooja@example.com", party: "Party B" },
    { name: "Anjali", email: "anjali@example.com", party: "Party C" }
  ];

  const voteResultsDiv = document.getElementById('voteResults');

  // Tally votes by party
  const partyCounts = {};
  mockData.forEach(entry => {
    const party = entry.party;
    partyCounts[party] = (partyCounts[party] || 0) + 1;
  });

  // Generate result HTML
  let resultHTML = `<h2>Total Votes per Party</h2><ul>`;
  for (const [party, count] of Object.entries(partyCounts)) {
    resultHTML += `<li><strong>${party}</strong>: ${count} votes</li>`;
  }
  resultHTML += `</ul>`;

  voteResultsDiv.innerHTML = resultHTML;
});
