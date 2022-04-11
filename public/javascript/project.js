function joinProject () {
    fetch("/api/team", {
        method: "post",
        headers: { "Content-Type": "application/json" },
      })
        .then(function () {
          ;
        })
        .catch((err) => console.log(err));
    }
    
    document.querySelector("#projectBtn").addEventListener("click", joinProject);
    
