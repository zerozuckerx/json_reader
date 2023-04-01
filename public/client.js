function fetchData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((jsonData) => {
      const wrapperDiv = document.querySelector(".wrapper");
      const nameP = document.createElement("p");
      const ageP = document.createElement("p");
      const emailP = document.createElement("p");

      nameP.textContent = `Name: ${jsonData.name}`;
      ageP.textContent = `Age: ${jsonData.age}`;
      emailP.textContent = `Email: ${jsonData.email}`;

      wrapperDiv.appendChild(nameP);
      wrapperDiv.appendChild(ageP);
      wrapperDiv.appendChild(emailP);
    });
}

const button = document.querySelector(".fetchButton");
button.addEventListener("click", fetchData);