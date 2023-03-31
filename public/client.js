fetch("./data.json")
    .then(res => res.json())
    .then(jsonData => {
        const nameElement = document.getElementById("name");
        const ageElement = document.getElementById("age");
        const emailElement = document.getElementById("email");

        nameElement.textContent = jsonData.name;
        ageElement.textContent = jsonData.age;
        emailElement.textContent = jsonData.email;
    });