let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => {
      let allToys = toys
      console.log(allToys)
      allToys.forEach(toy => {
        let div = document.createElement('div')
        div.className = "card"
        div.textContent = toy

        
        document.querySelector('#toy-collection').appendChild(div)
      })
    })
});
