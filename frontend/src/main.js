import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
    <div class="page">

        <div class="container">

            <h1>Student Information System</h1>

            <p class="subtitle">
                Search for a student using their UID
            </p>

            <div class="search-box">

                <input
                    type="text"
                    id="uidInput"
                    placeholder="Enter UID (e.g. U2408023)"
                />

                <button id="searchButton">
                    Search
                </button>

            </div>

            <div id="result"></div>

        </div>

    </div>
`;

const uidInput = document.getElementById("uidInput");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");

async function searchStudent() {
  const uid = uidInput.value.trim();

  if (uid === "") {
    result.innerHTML = `
            <div class="message error">
                Please enter a UID.
            </div>
        `;
    return;
  }

  result.innerHTML = `
        <div class="message">
            Searching...
        </div>
    `;

  try {
    const response = await fetch(`/api/student/${uid}`);

    const data = await response.json();

    if (!response.ok) {
      result.innerHTML = `
                <div class="student-not-found">
                    <h2>Student Not Found</h2>
                    <p>${data.message}</p>
                </div>
            `;
      return;
    }

    result.innerHTML = `
            <div class="student-card">

                <h2>${data.name}</h2>

                <div class="student-info">
                    <p>
                        <span>UID</span>
                        <strong>${data.uid}</strong>
                    </p>

                    <p>
                        <span>Roll Number</span>
                        <strong>${data.rollNo}</strong>
                    </p>

                    <p>
                        <span>Branch</span>
                        <strong>${data.branch}</strong>
                    </p>
                </div>

            </div>
        `;

  } catch (error) {
    console.error(error);

    result.innerHTML = `
            <div class="student-not-found">
                <h2>Connection Error</h2>
                <p>Could not connect to the backend server.</p>
            </div>
        `;
  }
}

searchButton.addEventListener("click", searchStudent);

uidInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchStudent();
  }
});