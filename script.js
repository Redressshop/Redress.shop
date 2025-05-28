document.addEventListener("DOMContentLoaded", function () {
  const prodotti = [
    {
      nome: "Giacca Denim",
      prezzo: "€59",
      descrizione: "Giacca in denim blu, perfetta per ogni stagione.",
      immagine: "https://via.placeholder.com/300x200?text=Giacca+Denim"
    },
    {
      nome: "Sneakers Rosse",
      prezzo: "€89",
      descrizione: "Sneakers moderne dal colore vivace e suola comoda.",
      immagine: "https://via.placeholder.com/300x200?text=Sneakers+Rosse"
    },
    {
      nome: "Felpa Logo",
      prezzo: "€49",
      descrizione: "Felpa con il logo Redress, comoda e di tendenza.",
      immagine: "https://via.placeholder.com/300x200?text=Felpa+Logo"
    },
    {
      nome: "T-shirt Basic",
      prezzo: "€19",
      descrizione: "T-shirt semplice e versatile, disponibile in vari colori.",
      immagine: "https://via.placeholder.com/300x200?text=T-shirt+Basic"
    },
    {
      nome: "Jeans Slim",
      prezzo: "€ prezzo",
      descrizione: "desc",
      immagine: "https://"}
    // Puoi aggiungere altri oggetti qui...
  ];

  const container = document.getElementById("prodotti");
  const searchInput = document.getElementById("searchBar");

  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupNome = document.getElementById("popup-nome");
  const popupPrezzo = document.getElementById("popup-prezzo");
  const popupDesc = document.getElementById("popup-desc");
  const popupClose = document.getElementById("popup-close");

  function mostraProdotti(lista) {
    container.innerHTML = "";
    const daMostrare = lista.slice(0, 5);
    daMostrare.forEach(prod => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${prod.immagine}" alt="${prod.nome}">
        <div class="product-name">${prod.nome}</div>
        <div class="product-price">${prod.prezzo}</div>
      `;
      card.addEventListener("click", () => {
        popupImg.src = prod.immagine;
        popupNome.textContent = prod.nome;
        popupPrezzo.textContent = prod.prezzo;
        popupDesc.textContent = prod.descrizione;
        popup.classList.remove("hidden");
      });
      container.appendChild(card);
    });
  }

  popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtrati = prodotti.filter(p => p.nome.toLowerCase().includes(query));
    mostraProdotti(filtrati);
  });

  mostraProdotti(prodotti);
});
const toggleButton = document.getElementById("toggle-contact");
const contactMenu = document.getElementById("contact-menu");

toggleButton.addEventListener("click", () => {
  contactMenu.classList.toggle("hidden");
});
