
//================== preloader ================//
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add('disapear')
}
//================== preloader end================//

//================== active class================//
const navLinkEls=document.querySelectorAll(".nav_link");
navLinkEls.forEach(navLinkEls =>{
  navLinkEls.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
  navLinkEls.classList.add('active');
  });
});
//================== active class end================//

//================== hamburger button================//
const hamburger = document.getElementById("hamburger");
const ham_open = document.getElementById("ham_open");
const ham_close = document.getElementById("ham_close");
const nav1 = document.getElementById("nav1");

hamburger.addEventListener('click', menu_open)
function menu_open(){
  if(ham_open.style.display=="block"){
    ham_close.style.display="none";
  }
else{
ham_close.style.display="block";
ham_open.style.display="none";      
}  
}

ham_open.addEventListener('click',nav_open)
function nav_open(){
  nav1.style.display="block";
 }

ham_close.addEventListener('click',nav_close)
function nav_close(){
  nav1.style.display="none";
 }

//================== hamburger button end================//

//==============page function===================//
const livescore_section = document.getElementById("livescore_section");
const leauges_section = document.getElementById("leauges_section");
const news_section = document.getElementById("news_section");
const team_section = document.getElementById("team_section");
const about_section = document.getElementById("about_section");
const contact_section = document.getElementById("contact_section");
const terms_section = document.getElementById("terms_section");
const standing_section = document.getElementById("standing_section");

function livescore1() {
  livescore_section.style.display = "block";
  livescore_section.classList.add("page_effect");
  standing_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function leauges1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "block";
  leauges_section.classList.add("page_effect");
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function standing1() {
  standing_section.style.display = "block";
  standing_section.classList.add("page_effect");
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}


function team1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "block";
  team_section.classList.add("page_effect");
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function news1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "block";
  news_section.classList.add("page_effect");
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function about1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "block";
  about_section.classList.add("page_effect");
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function contact1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "block";
  contact_section.classList.add("page_effect");
  terms_section.style.display = "none";
}

function terms1() {
  standing_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "block";
  terms_section.classList.add("page_effect");
}
//==============page function end===================//

//================== leauge section================//


//================== team section================//
const API_KEY = '5f76f3a07d900ee1751203c003111b37';  // Replace with your API-Football v3 Key
const BASE_URL = 'https://v3.football.api-sports.io';
const headers = { 'x-apisports-key': API_KEY };

let cache = {};

async function fetchWithCache(endpoint, cacheKey, cacheDuration = 30000) {
  const now = Date.now();

  if (cache[cacheKey] && (now - cache[cacheKey].timestamp < cacheDuration)) {
    console.log('Using cached data for:', cacheKey);
    return cache[cacheKey].data;
  }

  console.log('Fetching API:', cacheKey);
  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
  const data = await response.json();

  cache[cacheKey] = { data: data, timestamp: now };

  return data;
}
async function searchTeamByName(teamName) {
  if (!teamName) return;

  const data = await fetchWithCache(`/teams?search=${teamName}`, `teamSearch-${teamName}`);
  const container = document.getElementById('team-info');
  container.innerHTML = '';

  if (data.response.length === 0) {
    container.innerHTML = '<p>No team found.</p>';
    return;
  }
  const team = data.response[0].team;
  const venue = data.response[0].venue;
  container.innerHTML = `
        <img src="${team.logo}" alt="${team.name}">
        <h2>${team.name}</h2>
        <div class="team-details">
            <p><strong>Country:</strong> ${team.country}</p>
            <p><strong>Founded:</strong> ${team.founded}</p>
            <p><strong>Venue:</strong> ${venue.name}</p>
            <p><strong>City:</strong> ${venue.city}</p>
            <p><strong>Capacity:</strong> ${venue.capacity}</p>
            <p><strong>Surface:</strong> ${venue.surface}</p>
        </div>
    `;
}
document.getElementById('search-btn').addEventListener('click', () => {
  const teamName = document.getElementById('team-search').value.trim();
  searchTeamByName(teamName);
});

// Optional: Search on Enter Key Press
document.getElementById('team-search').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const teamName = e.target.value.trim();
    searchTeamByName(teamName);
  }
});

//================== team section end================//

//================== news section ================//
const API_KEY1 = "221a9348cdf44b1b8440e097c7988fee"; // Replace with your NewsAPI.org key
const API_URL = `https://newsapi.org/v2/everything?q=football%20OR%20sports&language=en&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`;
const CACHE_KEY = "sportsNewsCache";

// Display News
function displayNews(articles) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  articles.forEach(article => {
    const image = article.urlToImage || "https://via.placeholder.com/300x180?text=No+Image";
    const title = article.title || "No title";
    const desc = article.description || "No description available.";
    const url = article.url;

    container.innerHTML += `
      <div class="news-item">
        <img src="${image}" alt="${title}">
        <div class="news-content">
          <h2>${title}</h2>
          <p>${desc}</p>
          <a href="${url}" target="_blank" class="read-more">Read More</a>
        </div>
      </div>
    `;
  });
}
// Fetch News from API
async function fetchNews() {
  try {
    const res = await fetch(API_URL1);
    const data = await res.json();
    if (data.articles) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data.articles));
      displayNews(data.articles);
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}
// Load from cache first
const cached = localStorage.getItem(CACHE_KEY);
if (cached) {
  displayNews(JSON.parse(cached));
}

// Then fetch fresh news
fetchNews();

//================== news section end================//
