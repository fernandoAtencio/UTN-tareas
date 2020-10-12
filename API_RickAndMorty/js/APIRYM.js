const urlDefault = "https://rickandmortyapi.com/api/character";

let _characters = [];
const get = async (url = urlDefault) => {
  try {
    const response = await fetch(url);
    const { results: characters } = await response.json();
    return characters;
  } catch (error) {
    console.error(error);
  }
};

const search = () => {
  const { value: fullName } = document.getElementById("input");
  const character = _characters.find(
    (character) => character.name === fullName
  );
  console.log(character);
};

const del = (index) => {
  document.getElementById(index).remove();
};

const createDOMElement = (character, index) => {
  const out = `
            <div class="col-4" id="${index}">
            <div class="card mt-5 ml-3">
                <img src="${character.image}" alt="${character.name}" />
                <div class="card-body">
                    <h5 class="card-title">
                        ${character.name}
                    </h5>
                    <p class="card-text">
                        Especie : ${character.species}

                    </p>
                    <p class="card-text">
                        Estado : ${
                          character.status === "Alive" ? "Vivo" : "Muerto"
                        }
                    </p>
                    <button class="btn btn-danger btn-block" onClick="del(${index})">X</button>
                </div>
            </div>
            </div>
            
          `;
  return out;
};

const start = async () => {
  document.getElementById("find").addEventListener("click", search);
  _characters = await get();
  _characters.map((character, index) => {
    const html = createDOMElement(character, index);
    document.getElementById("apiR").insertAdjacentHTML("beforeend", html);
  });
};
window.onload = start;
