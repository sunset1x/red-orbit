/*------------------------------
      TUTORIAL DATABASE 
------------------------------*/

const tutorialData = {

  cherax: {
    title: "Cherax",
    tags: "PAID • RECOMMEND • GTA 5 ONLINE",
    desc: "The most powerful and reliable paid GTA V mod menu.",
    embed: "https://www.youtube.com/embed/nK_y97QGVQI",
    status: "operational",
    tabs: ["overview", "changelog", "howto"],

    changelog: `
      <ul class="changelog-list">
        <li><strong>v3.1</strong> — Updated protections</li>
        <li><strong>v3.0</strong> — UI overhaul</li>
        <li><strong>v2.9</strong> — Improved stability</li>
      </ul>
    `,

    howto: `
      <ol class="howto-list">
        <li>Purchase Cherax from the official website.</li>
        <li>Download the launcher.</li>
        <li>Run the launcher as administrator.</li>
        <li>Log in with your account.</li>
        <li>Inject once GTA V is fully loaded.</li>
      </ol>
    `,

    buttons: `
      <a href="https://cherax.menu/landing#pricing" class="btn-purchase" target="_blank">🛒 Purchase</a>
      <a href="https://cherax.menu" class="btn-website" target="_blank"><img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/website.png" class="modal-icon"></a>
      <a href="https://discord.gg/bHy6eRMNeV" class="btn-discord" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="modal-icon"></a>

    `
  },

  yimv2: {
    title: "YimMenu V2 (Enhanced)",
    tags: "FREE • RECOMMEND • GTA 5 ONLINE",
    desc: "The best free GTA5 Online menu for Enhanced Edition.",
    embed: "https://www.youtube.com/embed/ddmhUIjrmoU",
    status: "operational",
    tabs: ["overview", "changelog", "howto"],

    changelog: `
      <ul class="changelog-list">
        <li><strong>v2.4</strong> — Updated for latest GTA patch</li>
        <li><strong>v2.3</strong> — Improved protections</li>
        <li><strong>v2.2</strong> — Added new recovery options</li>
      </ul>
    `,

    howto: `
      <ol class="howto-list">
        <li>Download YimMenu V2 using the button below.</li>
        <li>Extract the ZIP file.</li>
        <li>Place YimMenu files into your GTA directory.</li>
        <li>Launch GTA V (Enhanced Edition).</li>
        <li>Press <strong>F5</strong> to open the menu.</li>
      </ol>
    `,

    buttons: `
      <a href="https://loot-link.com/s?GWDxHyNk" class="btn-download" target="_blank"><img src="https://raw.githubusercontent.com/sunset1x/red-orbit/refs/heads/main/images/download.png" class="download-icon">Download</a>
      <a href="https://discord.gg/bHy6eRMNeV" class="btn-discord" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="modal-icon"></a>
      <a href="https://www.youtube.com/watch?v=xj9UvxI6voM" class="btn-help" target="_blank">❓ Help</a>
    `
  },

  yimv1: {
    title: "YimMenu (Legacy)",
    tags: "FREE • GUIDE • GTA 5 ONLINE",
    desc: "The best free GTA5 Online menu for Legacy Edition.",
    embed: "https://www.youtube.com/embed/EhqrD2KMqWs",
    status: "operational",
    tabs: ["overview", "changelog", "howto"],

    changelog: `
      <ul class="changelog-list">
        <li><strong>v1.9</strong> — Updated for latest Legacy patch</li>
        <li><strong>v1.8</strong> — Improved stability</li>
        <li><strong>v1.7</strong> — Added new protections</li>
      </ul>
    `,

    howto: `
      <ol class="howto-list">
        <li>Download YimMenu Legacy using the button below.</li>
        <li>Extract the ZIP file.</li>
        <li>Place YimMenu files into your GTA Legacy directory.</li>
        <li>Launch GTA V (Legacy Edition).</li>
        <li>Press <strong>F5</strong> to open the menu.</li>
      </ol>
    `,

    buttons: `
      <a href="https://loot-link.com/s?4ggkVkbh" class="btn-download" target="_blank">⬇ Download</a>
      <a href="https://discord.gg/bHy6eRMNeV" class="btn-discord" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="modal-icon"></a>
      <a href="https://www.youtube.com/watch?v=xj9UvxI6voM" class="btn-help" target="_blank">❓ Help</a>
    `
  },

  OxCheats: {
    title: "0xCheats (Enhanced)",
    tags: "PAID • GUIDE • GTA 5 ONLINE",
    desc: "An outstanding mod menu with dozens of features that is still undergoing testing.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    status: "offline",
    tabs: ["overview", "howto"],

    changelog: `
      <p>No changelog available.</p>
    `,

    howto: `
      <ol class="howto-list">
        <li>Purchase 0xCheats from the official website.</li>
        <li>Download the launcher.</li>
        <li>Run as administrator.</li>
        <li>Log in with your account.</li>
        <li>Inject into GTA V.</li>
      </ol>
    `,

    buttons: `
      <a href="https://0xcheats.com/games" class="btn-purchase" target="_blank">🛒 Purchase</a>
      <a href="https://discord.gg/bHy6eRMNeV" class="btn-discord" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="modal-icon"></a>
    `
  },

  Kiddions: {
    title: "Kiddions Mod Menu (Outdated)",
    tags: "FREE • GUIDE • GTA 5 ONLINE",
    desc: "The most iconic free GTA5 Online menu for Legacy Edition.",
    embed: "https://www.youtube.com/embed/pnnwFsWkYzE",
    status: "offline",
    tabs: ["overview", "howto"],

    changelog: `
      <p>No changelog available (menu discontinued).</p>
    `,

    howto: `
      <ol class="howto-list">
        <li>Download Kiddions using the button below.</li>
        <li>Extract the ZIP file.</li>
        <li>Place Kiddions files into your GTA directory.</li>
        <li>Launch GTA V.</li>
        <li>Press <strong>F5</strong> to open the menu.</li>
      </ol>
    `,

    buttons: `
      <a href="https://loot-link.com/s?dd3d6b1d" class="btn-download" target="_blank">⬇ Download</a>
      <a href="https://discord.gg/bHy6eRMNeV" class="btn-discord" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670157.png" class="modal-icon"></a>
      <a href="https://www.youtube.com/watch?v=xj9UvxI6voM" class="btn-help" target="_blank">❓ Help</a>
    `
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
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalVideo = document.getElementById("modalVideo");
const modalDesc = document.getElementById("modalDesc");
const modalButtons = document.getElementById("modalButtons");

const modalStatusDot = document.getElementById("modalStatusDot");
const modalStatusText = document.getElementById("modalStatusText");

const modalChangelog = document.getElementById("modalChangelog");
const modalHowTo = document.getElementById("modalHowTo");

document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const t = tutorialData[id];

    // TITLE
    modalTitle.textContent = t.title;

    // VIDEO
    modalVideo.src = t.embed + "?autoplay=0&mute=1&controls=0&modestbranding=1";

    // DESCRIPTION
    modalDesc.textContent = t.desc;

    // STATUS
    if (t.status === "operational") {
      modalStatusDot.className = "status-dot operational";
      modalStatusText.textContent = "Operational";
    } else {
      modalStatusDot.className = "status-dot offline";
      modalStatusText.textContent = "Not Operational";
    }

    // BUTTONS
    modalButtons.innerHTML = t.buttons || "";

    // CHANGELOG
    modalChangelog.innerHTML = t.changelog || "<p>No changelog available.</p>";

    // HOW TO
    modalHowTo.innerHTML = t.howto || "<p>No instructions available.</p>";

    // TAB CONTROL

    // OPEN MODAL
    modal.classList.add("active");
    modalOverlay.classList.add("active");
  });
});

// CLOSE
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  modalVideo.src = ""; // stop video
}

// TAB SWITCHING (simple, solid)
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab; // "overview", "changelog", "howto"

    // buttons
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // content
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(`tab-${target}`).classList.add("active");
  });
});





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

      if (id === "cherax") setStatus(true);
          
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
