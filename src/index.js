//console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const imageContainer = document.getElementById("dog-image-container");

    data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        imageContainer.appendChild(img);
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
     const breedList = document.getElementById("dog-breeds");
     const breeds = data.message;
     
     for (let breed in breeds) {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
     }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const breedList = document.getElementById("dog-breeds");

    breedList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById("dog-breeds");
        const breeds = data.message;
  
        
        function addBreeds(breeds) {
          breedList.innerHTML = ""; 
          for (let breed in breeds) {
            const li = document.createElement("li");
            li.textContent = breed;
            breedList.appendChild(li);
          }
        }
  
        addBreeds(breeds);
  
        
        const breedDropdown = document.getElementById("breed-dropdown");
        breedDropdown.addEventListener("change", (event) => {
          const selectedLetter = event.target.value;
          const filteredBreeds = {};
  
          for (let breed in breeds) {
            if (breed.startsWith(selectedLetter)) {
              filteredBreeds[breed] = breeds[breed];
            }
          }
  
          addBreeds(filteredBreeds);
        });
      });
  });
  





