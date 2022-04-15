// Join project button functionality for the user to join the project they click on.
const joinTeamButtons = document.querySelectorAll(".project-button");

joinTeamButtons.forEach((btn) => btn.addEventListener("click", joinProject));

async function joinProject(e) {
  const projectId = parseInt(e.target.value);

  const response = await fetch("/api/team", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      projectId,
    }),
  });
}
