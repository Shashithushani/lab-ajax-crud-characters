const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const { data } = await charactersAPI.getFullList();
      const charContainer = document.querySelector(".characters-container");
      charContainer.innerHTML = "";

      data.forEach((oneChar) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = ` <div class="name">Name: ${oneChar.name}</div>
        <div class="occupation"> Occpation : ${oneChar.occupation}</div>
        <div class="cartoon">Is a Cartoon? :${oneChar.cartoon}</div>
        <div class="weapon">Character Weapon:${oneChar.weapon}</div`;
        charContainer.appendChild(newDiv);
      });
    });
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
