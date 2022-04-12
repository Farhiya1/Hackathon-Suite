// function joinProject () {
//     fetch("/api/team", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//       })
//         .then(function () {
//           ;
//         })
//         .catch((err) => console.log(err));
//     }

//     document.querySelector("#projectBtn").addEventListener("click", joinProject);

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("project-button").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "/api/team", true);
  xhttp.send();
}
