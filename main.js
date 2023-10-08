const title = document.getElementById("title-form");
const autor = document.getElementById("autor-form");
const anio = document.getElementById("anio-form");
const image = document.getElementById("img-form");
const row = document.getElementById("row-container-card");
const btnAddBook = document.getElementById("add-book");
const library = [];

btnAddBook.addEventListener("click", addBook);
function addBook(e) {
  const libro = {
    id: library.length,
    nombre: title.value,
    autor: autor.value,
    anio: anio.value,
    image: image.value,
  };

  clear();

  const fragmen = new DocumentFragment();
  const newBook = document.getElementById("template-card").content;
  const btnView = newBook.querySelector(".btn");
  const imgCard = newBook.querySelector("img");
  btnView.id = libro.id;
  imgCard.src = libro.image;
  const clone = newBook.cloneNode(true);
  fragmen.appendChild(clone);
  row.appendChild(fragmen);
  library.push(libro);
}

row.addEventListener("click", viewBook);
function viewBook(e) {
  const select = e.target;
  const modalView = document.getElementById("modal-view");
  const template = document.getElementById("template-view").content;
  const fragment = document.createDocumentFragment();
  const imgFuck = template.getElementById("imgFuck");
  const titleView = template.getElementById("title-view");
  const autor = template.getElementById("autor-view");
  const publication = template.getElementById("publication-view");
  if (select.classList.contains("btn")) {
    const bookFound = library[Number(select.id)];
    console.log(bookFound);
    imgFuck.src = bookFound.image;
    titleView.textContent = bookFound.nombre;
    autor.textContent = bookFound.autor;
    publication.textContent = bookFound.anio;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    modalView.innerHTML = ""
    modalView.appendChild(fragment);
  }
}

function clear() {
  (title.value = ""), (autor.value = ""), (anio.value = ""), (image.value = "");
}
