function fetchData(data) {
  fetch(data)
    .then((res) => res.json())
    .then(function (jsonData) {
      console.log(jsonData);
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
    })
    .catch(err => console.log(err));
}

const button = document.querySelector(".fetchButton");
button.addEventListener("click", function() {
  fetchData("/data.json");
});