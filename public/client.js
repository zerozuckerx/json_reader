fetch("./data.json")
  .then(res => res.json())
  .then(jsonData => {
    const wrapperDiv = document.querySelector(".wrapper");
    const nameP = document.createElement("p");
    const ageP = document.createElement("p");
    const emailP = document.createElement("p");
    
    nameP.textContent = jsonData.name;
    ageP.textContent = jsonData.age;
    emailP.textContent = jsonData.email;

    wrapperDiv.appendChild(nameP);
    wrapperDiv.appendChild(ageP);
    wrapperDiv.appendChild(emailP);
  }
);