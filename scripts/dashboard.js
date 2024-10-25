const user = JSON.parse(localStorage.getItem("user"));

// Display username in Profile Settings
document.getElementById("usernameDisplay").innerText = user.username;

// Role-based access to Messages section
if (user.role === "owner") {
  document.getElementById("messages").style.display = "block";
}

// Navigation function
function navigateTo(section) {
  document
    .querySelectorAll(".section")
    .forEach((s) => (s.style.display = "none"));
  document.getElementById(section).style.display = "block";
}

// Clock In/Out functionality (for demonstration purposes)
function clockIn() {
  alert("Clocked In");
}

function clockOut() {
  alert("Clocked Out");
}

// Basic notification for messages (mocked)
const notificationBadge = document.getElementById("notificationBadge");

function checkMessages() {
  // This is a placeholder for actual messaging notifications
  notificationBadge.innerText = "New!";
}

checkMessages(); // Call on page load
