let myProjectForm = document.querySelector("#projectForm");
let addProjectBtn = document.querySelector("#project-submit-btn");


function getDetails(datas){
    addProject(datas).then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
}

async function addProject(datas) {
    console.log("Data, ", datas)
    let response = await fetch("http://localhost:3000/portfolio", {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify(datas)
    });
    // console.log(JSON.stringify(data))
    return response
}

addProjectBtn.addEventListener("click", e=>{
    e.preventDefault();
    console.log()
    let addProjectData = {
        title: document.getElementById("project-title").value, 
        password: document.getElementById("project-description").value
    }
    getDetails(addProjectData)
})