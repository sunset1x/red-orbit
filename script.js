/* 1. Popup Database */
const tutorialData = {
  cherax: {
    title: "Cherax",
    tags: "PAID • RECOMMEND • GTA 5 ONLINE",
    desc: "The most powerful and reliable paid GTA V mod menu.",
    embed: "https://www.youtube.com/embed/nK_y97QGVQI",
    type: "paid",
    purchase: "https://cherax.menu/landing#pricing",
    download: "",
    website: "https://cherax.menu",
    discord: "https://discord.gg/bHy6eRMNeV"
  },

  yimv2: {
    title: "YimMenu V2",
    tags: "FREE • RECOMMEND • GTA 5 ONLINE",
    desc: "The best free GTA5 Online menu for Enhanced Edition.",
    embed: "https://www.youtube.com/embed/ddmhUIjrmoU",
    type: "free",
    helpTooltip: "Need help installing YimMenu V2?",
    helpLink: "https://www.youtube.com/watch?v=xj9UvxI6voM",
    download: "https://loot-link.com/s?GWDxHyNk",
    website: "",
    discord: "https://discord.gg/bHy6eRMNeV",
  },

  yimv1: {
    title: "YimMenu (Legacy)",
    tags: "FREE • GUIDE • GTA 5 ONLINE",
    desc: "The best free GTA5 Online menu for Legacy Edition.",
    embed: "https://www.youtube.com/embed/EhqrD2KMqWs",
    type: "free",
    helpTooltip: "Need help installing YimMenu (Legacy)?",
    helpLink: "https://www.youtube.com/watch?v=xj9UvxI6voM",
    download: "https://loot-link.com/s?4ggkVkbh",
    website: "",
    discord: "https://discord.gg/bHy6eRMNeV"
  },

  OxCheats: {
    title: "0xCheats (Enhanced)",
    tags: "FREE • GUIDE • GTA 5 ONLINE",
    desc: "An outstanding mod menu with dozens of features that is still undergoing testing.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "paid",
    purchase: "https://0xcheats.com/games",
    download: "",
    website: "",
    discord: "https://discord.gg/bHy6eRMNeV"
  },
    
  Kiddions: {
    title: "Kiddions Mod Menu (Outdated)",
    tags: "FREE • GUIDE • GTA 5 ONLINE",
    desc: "The most iconic free GTA5 Online menu for Legacy Edition.",
    embed: "https://www.youtube.com/embed/pnnwFsWkYzE",
    type: "free",
    helpTooltip: "Need help installing YimMenu V2?",
    helpLink: "https://www.youtube.com/watch?v=xj9UvxI6voM",
    download: "https://loot-link.com/s?dd3d6b1d",
    website: "",
    discord: "https://discord.gg/bHy6eRMNeV"
  }

  
};

/* <!-- SEARCH ENGINE --> */
/* 1. GET ELEMENTS */
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".tutorial-card");
let currentPage = 1;
const cardsPerPage = 6;

/* 2. GLOBAL SEARCH (works across ALL pages) */
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });

  // Hide pagination while searching
  if (query.length > 0) {
    document.querySelector(".pagination").style.display = "none";
  } else {
    document.querySelector(".pagination").style.display = "flex";
    applyPagination(currentPage);   // restore correct page
  }
});

/* 3. PAGINATION FUNCTION */
function applyPagination(page) {
  currentPage = page;

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  cards.forEach((card, index) => {
    card.style.display = (index >= start && index < end) ? "block" : "none";
  });
}

/* 4. PAGINATION BUTTONS */
const pagePrev = document.getElementById("pagePrev");
const pageNext = document.getElementById("pageNext");
const pageNumber = document.getElementById("pageNumber");

function updatePageNumber() {
  pageNumber.textContent = currentPage;
}

pagePrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    applyPagination(currentPage);
    updatePageNumber();
  }
});

pageNext.addEventListener("click", () => {
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    applyPagination(currentPage);
    updatePageNumber();
  }
});


/* 5. INITIAL PAGE LOAD */
applyPagination(1);

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const t = tutorialData[id];

    let buttons = "";

    // FREE MENU → Download
    if (t.type === "free" && t.download) {
      buttons += `
        <a href="${t.download}" class="btn-download" target="_blank">
          <img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/downloadd.png" class="icon">
          <span class="download-text">Download</span>
        </a>
        
      `;
      
    }
    // PAID MENU → Purchase
    if (t.type === "paid" && t.purchase) {
      buttons += `
    <a href="${t.purchase}" class="btn-purchase" target="_blank">
          <span class="download-text">🛒 Purchase</span>
        </a>
  `;;
    }

    // WEBSITE BUTTON (optional)
    if (t.website) {
      buttons += `
        <a href="${t.website}" class="btn-website" target="_blank">
          <img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/website.png" class="icon">
        </a>
      `;
    }

    // DISCORD BUTTON (optional)
    if (t.discord) {
      buttons += `
        <a href="${t.discord}" class="btn-discord" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="icon">
        </a>
      `;
    }  
    // HELP TOOLTIP (clickable)
  if (t.type === "free" && t.helpTooltip && t.helpLink) {
    buttons += `
      <a href="${t.helpLink}" target="_blank" class="help-tooltip">
        <span class="icon">?</span>
        <span class="tooltip-text">${t.helpTooltip}</span>
      </a>
    `;
  }

    // FINAL POPUP CONTENT
    modalContent.innerHTML = `
      <h2>${t.title}</h2>

      <iframe width="100%" height="315"
        src="${t.embed}"
        allowfullscreen></iframe>

      <p style="margin-top:15px;">${t.desc}</p>

      <div class="modal-buttons">
        ${buttons}
      </div>
    `;
    
    modal.classList.add("active");
    modalOverlay.classList.add("active");
  });
});


modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});


  function updateTutorialCount() {
    const cards = document.querySelectorAll('.tutorial-card');
    const count = cards.length;
    const counter = document.querySelector('.tutorial-count');
    const badge = document.querySelector('.new-badge');

    const previousCount = Number(localStorage.getItem("tutorialCount")) || 0;

    counter.textContent = `${count} tutorials live`;

    if (count > previousCount) {
      badge.style.display = "inline-block";
    }

    localStorage.setItem("tutorialCount", count);
  }

  updateTutorialCount();

/* Themes */
const themeOrder = ["theme-tempest", "theme-purple", "theme-blood"];
let currentTheme = localStorage.getItem("theme") || "theme-blood";

document.body.classList.add(currentTheme);

document.getElementById("themeButton").addEventListener("click", () => {
  const index = themeOrder.indexOf(currentTheme);
  const nextTheme = themeOrder[(index + 1) % themeOrder.length];

  document.body.classList.remove(currentTheme);
  document.body.classList.add(nextTheme);

  currentTheme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});
