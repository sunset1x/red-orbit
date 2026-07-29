/*------------------------------
      TUTORIAL DATABASE 
------------------------------*/
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
    discord: "https://discord.gg/bHy6eRMNeV"
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
    helpLink: "https://www.youtube.com/watch?v/xj9UvxI6voM",
    download: "https://loot-link.com/s?dd3d6b1d",
    website: "",
    discord: "https://discord.gg/bHy6eRMNeV"
  }
};


/*------------------------------
        SEARCH ENGINE
------------------------------*/
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".tutorial-card");

let currentPage = 1;
const cardsPerPage = 6;

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });

  const pagination = document.querySelector(".pagination");

  if (query.length > 0) {
    pagination.style.display = "none";
  } else {
    pagination.style.display = "flex";
    applyPagination(currentPage);
  }
});


/* ------------------------------
         PAGINATION
------------------------------ */
function applyPagination(page) {
  currentPage = page;

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  cards.forEach((card, index) => {
    card.style.display = (index >= start && index < end) ? "block" : "none";
  });
}

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

applyPagination(1);


/* ------------------------------
   MODAL POPUP
------------------------------ */
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const t = tutorialData[id];
        
    let buttons = "";

    if (t.type === "free" && t.download) {
      buttons += `
        <a href="${t.download}" class="btn-download" target="_blank">
          <img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/downloadd.png" class="icon">
          <span class="download-text">Download</span>
        </a>
      `;
    }

    if (t.type === "paid" && t.purchase) {
      buttons += `
        <a href="${t.purchase}" class="btn-purchase" target="_blank">
          <span class="download-text">🛒 Purchase</span>
        </a>
      `;
    }

    if (t.website) {
      buttons += `
        <a href="${t.website}" class="btn-website" target="_blank">
          <img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/website.png" class="icon">
        </a>
      `;
    }

    if (t.discord) {
      buttons += `
        <a href="${t.discord}" class="btn-discord" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="icon">
        </a>
      `;
    }

    if (t.type === "free" && t.helpTooltip && t.helpLink) {
      buttons += `
        <a href="${t.helpLink}" target="_blank" class="help-tooltip">
          <span class="icon">?</span>
          <span class="tooltip-text">${t.helpTooltip}</span>
        </a>
      `;
    }

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

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
}



/* ------------------------------
   TUTORIAL COUNTER
------------------------------ */
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

/* ------------------------------
   THEME SWITCHER
------------------------------ */
const themeOrder = ["theme-glass", "theme-tempest", "theme-purple"];
let currentTheme = localStorage.getItem("theme") || "theme-purple";

document.body.classList.add(currentTheme);

document.getElementById("themeButton").addEventListener("click", () => {
  const index = themeOrder.indexOf(currentTheme);
  const nextTheme = themeOrder[(index + 1) % themeOrder.length];

  document.body.classList.remove(currentTheme);
  document.body.classList.add(nextTheme);

  currentTheme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});


/* ------------------------------
         Premium Popup
------------------------------ */
  const launchBtns = document.querySelectorAll(".featured-launch-btn");
  const premiumOverlay = document.getElementById("premiumOverlay");
  const premiumPopup = document.getElementById("premiumPopup");
  const premiumClose = document.getElementById("premiumClose");
  const premiumIframe = document.getElementById("premiumIframe");

  launchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;

      // Load video based on ID
      if (id === "cherax") {
        premiumIframe.src = "https://www.youtube.com/embed/nK_y97QGVQI?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0";
      }

      premiumOverlay.classList.add("active");
      premiumPopup.classList.add("active");
    });
  });

  premiumClose.addEventListener("click", () => {
    premiumOverlay.classList.remove("active");
    premiumPopup.classList.remove("active");
    premiumIframe.src = ""; // stop video
  });

  premiumOverlay.addEventListener("click", () => {
    premiumOverlay.classList.remove("active");
    premiumPopup.classList.remove("active");
    premiumIframe.src = ""; // stop video
  });

/* ------------------------------
       Premium Popup Status 
------------------------------ */

function setStatus(isOperational) {
  const dot = document.getElementById("statusDot");
  const text = document.getElementById("statusText");

  if (isOperational) {
    dot.classList.remove("offline");
    dot.classList.add("operational");
    text.textContent = "Operational";
  } else {
    dot.classList.remove("operational");
    dot.classList.add("offline");
    text.textContent = "Not Operational";
  }
}


