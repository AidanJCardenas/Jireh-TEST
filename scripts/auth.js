// auth.js

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const userDoc = await db.collection("users").doc(username).get();

    if (!userDoc.exists) {
      throw new Error("User does not exist");
    }

    const userData = userDoc.data();

    if (userData.password === password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, role: userData.role })
      );
      window.location.href = "dashboard.html";
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    document.getElementById("error-message").innerText = error.message;
  }
});
