// ===== DATA =====
const players = [
  {
    id: 1,
    nickname: "fl1cker",
    role: "Снайпер",
    country: "Россия",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_White_Jersey_Studio%20%281%29-e0MKDMaHw2uuFND0uaSJ3mDGI8MLaS.png",
    rating: "1.24",
    kills: "1847",
    hs: "58%",
    bio: "AWP-er \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u0441\u0432\u043e\u0438\u043c\u0438 \u043c\u043e\u043b\u043d\u0438\u0435\u043d\u043e\u0441\u043d\u044b\u043c\u0438 \u0444\u043b\u0438\u043a\u0448\u043e\u0442\u0430\u043c\u0438 \u0438 \u043a\u043b\u0430\u0442\u0447\u0430\u043c\u0438. \u041e\u0434\u0438\u043d \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u0441\u043d\u0430\u0439\u043f\u0435\u0440\u043e\u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0430, \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043d\u0430 \u0442\u0443\u0440\u043d\u0438\u0440\u0430\u0445."
  },
  {
    id: 2,
    nickname: "rxnda",
    role: "\u0420\u0438\u0444\u043b\u0435\u0440",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_Jersey_Swap%20%282%29-Xe4pa5SSFtVAbbBa4Mo3d7qPbCTKA1.png",
    rating: "1.18",
    kills: "2103",
    hs: "62%",
    bio: "\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u044b\u0439 \u044d\u043d\u0442\u0440\u0438-\u0444\u0440\u0430\u0433\u0433\u0435\u0440 \u0441 \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u043c \u0445\u0435\u0434\u0448\u043e\u0442\u043e\u0432. \u0412\u0441\u0435\u0433\u0434\u0430 \u043f\u0435\u0440\u0432\u044b\u043c \u0432\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u0441\u0430\u0439\u0442 \u0438 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b."
  },
  {
    id: 3,
    nickname: "v1ze",
    role: "\u041b\u0443\u0440\u043a\u0435\u0440",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_Jersey_Merge%20%281%29%20%281%29-MAum3ltoemch5ndRCTgs3uuCHM4FHT.png",
    rating: "1.12",
    kills: "1654",
    hs: "51%",
    bio: "\u0422\u0438\u0445\u0438\u0439 \u0438\u0433\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0439\u043c\u0438\u043d\u0433\u0438. \u041c\u0430\u0441\u0442\u0435\u0440 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0438\u0433\u0440\u044b \u0438 \u043a\u043b\u0430\u0442\u0447\u0435\u0439."
  },
  {
    id: 4,
    nickname: "kasp3r",
    role: "\u041a\u0430\u043f\u0438\u0442\u0430\u043d / IGL",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_Jersey_Swap%20%281%29%20%281%29-4IWQYkgej2mBJNGGQr9APVf1E49I0F.png",
    rating: "1.09",
    kills: "1589",
    hs: "48%",
    bio: "\u041c\u043e\u0437\u0433 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u0438\u043d-\u0433\u0435\u0439\u043c \u043b\u0438\u0434\u0435\u0440. \u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u043a\u043e\u043b\u043b\u044b \u0438 \u043e\u0431\u0449\u0443\u044e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0446\u0438\u044e. \u041e\u043f\u044b\u0442\u043d\u044b\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043d \u0441 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0439 \u0433\u043e\u043b\u043e\u0432\u043e\u0439."
  },
  {
    id: 5,
    nickname: "sh1ro_jr",
    role: "\u0421\u0430\u043f\u043f\u043e\u0440\u0442",
    country: "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
    flag: "\ud83c\uddf0\ud83c\uddff",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_Jersey_Overlay%20%281%29-i8zJ6LFqchBx1nV0dCJ73QTbFHcrjA.png",
    rating: "1.05",
    kills: "1421",
    hs: "45%",
    bio: "\u041d\u0430\u0434\u0451\u0436\u043d\u044b\u0439 \u0441\u0430\u043f\u043f\u043e\u0440\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0433\u0440\u0430\u043d\u0430\u0442\u0430\u043c\u0438, \u0444\u043b\u0435\u0448\u043a\u0430\u043c\u0438 \u0438 \u0441\u043c\u043e\u043a\u0430\u043c\u0438. \u0418\u0433\u0440\u0430\u0435\u0442 \u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u0436\u0435\u0440\u0442\u0432\u0443\u044f \u043b\u0438\u0447\u043d\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439."
  }
];

const news = [
  {
    title: "Natus Losos \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u0432 \u043f\u043b\u0435\u0439-\u043e\u0444\u0444 ESL Pro League",
    date: "15 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: ""
  },
  {
    title: "\u041d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0441 SteelSeries: \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0441\u0434\u0435\u043b\u043a\u0438",
    date: "10 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: ""
  },
  {
    title: "fl1cker \u043f\u0440\u0438\u0437\u043d\u0430\u043d MVP \u0442\u0443\u0440\u043d\u0438\u0440\u0430 BLAST Premier",
    date: "2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: ""
  }
];

const tournaments = [
  {
    name: "ESL Pro League Season 21",
    info: "Prize Pool: $850,000 \u2022 16 \u043a\u043e\u043c\u0430\u043d\u0434",
    status: "active",
    statusText: "\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"
  },
  {
    name: "BLAST Premier Spring 2026",
    info: "Prize Pool: $425,000 \u2022 12 \u043a\u043e\u043c\u0430\u043d\u0434",
    status: "upcoming",
    statusText: "\u0421\u043a\u043e\u0440\u043e"
  },
  {
    name: "IEM Katowice 2026",
    info: "Prize Pool: $1,000,000 \u2022 24 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",
    status: "open",
    statusText: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"
  }
];

// ===== ACADEMY DATA =====
const academyPlayers = [
  {
    id: 101,
    nickname: "darklord",
    role: "\u0420\u0438\u0444\u043b\u0435\u0440",
    country: "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",
    flag: "\ud83c\uddf0\ud83c\uddff",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hailuo_Image_%7B%20_prompt__%20_%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%20%D0%BD%D0%B0%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BC_461505969077436417-U58ntys9I1dxuwCX7pnWJkuEmbrezy.jpg",
    rating: "0.98",
    kills: "876",
    hs: "52%",
    bio: "\u041c\u043e\u043b\u043e\u0434\u043e\u0439 \u0442\u0430\u043b\u0430\u043d\u0442 \u0438\u0437 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430, \u043f\u0440\u043e\u0448\u0451\u043b \u043e\u0442\u0431\u043e\u0440 \u0432 \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u044e \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u0430\u0432\u043e\u043c."
  },
  {
    id: 102,
    nickname: "br0nx",
    role: "\u0421\u043d\u0430\u0439\u043f\u0435\u0440",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esports_Portrait_Jersey_Swap%20%283%29.png-HWfUMsjxbn6uMRbzEtBmtDTgAVlrkG.jpeg",
    rating: "1.02",
    kills: "943",
    hs: "46%",
    bio: "\u041f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 AWP-\u0435\u0440, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043d\u0430 FPL-C \u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u0430\u0445."
  }
];

const matches = [
  {
    opponent: "Team Vitality",
    score: "2 : 1",
    date: "14 \u0444\u0435\u0432. 2026",
    result: "win"
  },
  {
    opponent: "FaZe Clan",
    score: "0 : 2",
    date: "12 \u0444\u0435\u0432. 2026",
    result: "loss"
  },
  {
    opponent: "G2 Esports",
    score: "2 : 0",
    date: "10 \u0444\u0435\u0432. 2026",
    result: "win"
  },
  {
    opponent: "NAVI",
    score: "1 : 2",
    date: "8 \u0444\u0435\u0432. 2026",
    result: "loss"
  },
  {
    opponent: "Cloud9",
    score: "2 : 0",
    date: "5 \u0444\u0435\u0432. 2026",
    result: "win"
  }
];

// ===== RENDER =====

function renderPlayers() {
  const grid = document.getElementById("players-grid");
  grid.innerHTML = players
    .map(
      (p) => `
    <div class="player-card" onclick="openModal(${p.id})">
      <div class="player-img-wrapper">
        <img src="${p.image}" alt="${p.nickname}" loading="lazy" />
      </div>
      <div class="player-info">
        <div class="player-nickname">${p.nickname}</div>
        <div class="player-role">${p.role}</div>
        <div class="player-country">
          <span class="flag">${p.flag}</span>
          ${p.country}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function renderNews() {
  const grid = document.getElementById("news-grid");
  grid.innerHTML = news
    .map(
      (n, i) => `
    <div class="news-card">
      <div class="news-img">
        ${n.image ? `<img src="${n.image}" alt="${n.title}" />` : `<svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>`}
      </div>
      <div class="news-body">
        <div class="news-date">${n.date}</div>
        <div class="news-title">${n.title}</div>
      </div>
    </div>`
    )
    .join("");
}

function renderTournaments() {
  const grid = document.getElementById("tournaments-grid");
  grid.innerHTML = tournaments
    .map(
      (t) => `
    <div class="tournament-card">
      <div class="tournament-name">${t.name}</div>
      <div class="tournament-info">${t.info}</div>
      <span class="badge badge-${t.status}">${t.statusText}</span>
    </div>`
    )
    .join("");
}

function renderMatches() {
  const list = document.getElementById("matches-list");
  list.innerHTML = matches
    .map(
      (m) => `
    <div class="match-card">
      <div class="match-teams">
        <span>Natus Losos</span>
        <span class="match-vs">vs</span>
        <span>${m.opponent}</span>
      </div>
      <div class="match-score">${m.score}</div>
      <div class="match-meta">
        <span class="match-date">${m.date}</span>
        <span class="badge badge-${m.result}">${m.result === "win" ? "\u041f\u043e\u0431\u0435\u0434\u0430" : "\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}</span>
      </div>
    </div>`
    )
    .join("");
}

// ===== ACADEMY RENDER =====

function renderAcademy() {
  const grid = document.getElementById("academy-grid");
  grid.innerHTML = academyPlayers
    .map(
      (p) => `
    <div class="player-card" onclick="openModal(${p.id}, true)">
      <div class="player-img-wrapper">
        <img src="${p.image}" alt="${p.nickname}" loading="lazy" />
      </div>
      <div class="player-info">
        <div class="player-nickname">${p.nickname}</div>
        <div class="player-role">${p.role}</div>
        <div class="player-country">
          <span class="flag">${p.flag}</span>
          ${p.country}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function switchAcademyTab(tab) {
  document.querySelectorAll(".academy-tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".academy-panel").forEach((p) => p.classList.remove("active"));

  document.getElementById("tab-" + tab).classList.add("active");
  document.getElementById("panel-" + tab).classList.add("active");
}

function submitApplication(e) {
  e.preventDefault();
  document.getElementById("apply-form").style.display = "none";
  document.getElementById("apply-success").style.display = "block";
}

// ===== MODAL =====
function openModal(id, isAcademy) {
  const source = isAcademy ? academyPlayers : players;
  const player = source.find((p) => p.id === id);
  if (!player) return;

  const modal = document.getElementById("modal");
  document.getElementById("modal-avatar").src = player.image;
  document.getElementById("modal-avatar").alt = player.nickname;
  document.getElementById("modal-name").textContent = player.nickname;
  document.getElementById("modal-role").textContent = player.role;
  document.getElementById("modal-country").innerHTML = `${player.flag} ${player.country}`;
  document.getElementById("modal-rating").textContent = player.rating;
  document.getElementById("modal-kills").textContent = player.kills;
  document.getElementById("modal-hs").textContent = player.hs;
  document.getElementById("modal-bio").textContent = player.bio;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===== BURGER MENU =====
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
  document.querySelector(".burger").classList.toggle("active");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderPlayers();
  renderAcademy();
  renderNews();
  renderTournaments();
  renderMatches();

  // Close modal on overlay click
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Close modal on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Close burger menu on nav link click
  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("nav").classList.remove("open");
      document.querySelector(".burger").classList.remove("active");
    });
  });
});
