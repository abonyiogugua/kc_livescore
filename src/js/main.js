
//================== active class================//
const navLinkEls=document.querySelectorAll(".nav_link");
navLinkEls.forEach(navLinkEls =>{
  navLinkEls.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
  navLinkEls.classList.add('active');
  });
});


const navLinkEls2=document.querySelectorAll(".nav_link2");
navLinkEls2.forEach(navLinkEls2 =>{
  navLinkEls2.addEventListener('click',()=>{
    document.querySelector('.active2')?.classList.remove('active2');
  navLinkEls2.classList.add('active2');
  });
});


//================== active class end================//

//================== hamburger button================//
const hamburger_btn = document.getElementById("hamburger");
const ham_close = document.getElementById("ham_close");
const nav1 = document.getElementById("nav1");


hamburger_btn.addEventListener('click', menu_open)
function menu_open(){
   nav1.style.display="block";
}  

ham_close.addEventListener('click', menu_close)
function menu_close(){
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
const live_section = document.getElementById("live_section");

function livescore1() {
  livescore_section.style.display = "block";
  livescore_section.classList.add("page_effect");
live_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}

function leauges1() {
  live_section.style.display = "none";
  livescore_section.style.display = "none";
  leauges_section.style.display = "block";
  leauges_section.classList.add("page_effect");
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}


function live1() {
  live_section.style.display = "block";
   live_section.classList.add("page_effect");
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "none";
}


function team1() {
  live_section.style.display = "none";
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
  live_section.style.display = "none";
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
  live_section.style.display = "none";
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
  livescore_section.style.display = "none";
  live_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "block";
  contact_section.classList.add("page_effect");
  terms_section.style.display = "none";
}

function terms1() {
  livescore_section.style.display = "none";
  leauges_section.style.display = "none";
  team_section.style.display = "none";
  live_section.style.display = "none";
  news_section.style.display = "none";
  about_section.style.display = "none";
  contact_section.style.display = "none";
  terms_section.style.display = "block";
  terms_section.classList.add("page_effect");
}
//==============page function end===================//

//================== leauge section================//
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'scorebat-jssdk'));
//================== leauge section end================//



//================== live section================//
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'scorebat-jssdk'));
//================== live section end================//


//================== team section================//
const API_KEY1 = '5f76f3a07d900ee1751203c003111b37'; 

async function searchTeam() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) {
    alert('Please enter a team name.');
    return;
  }
  
  const response = await fetch(`https://v3.football.api-sports.io/teams?search=${query}`, {
    method: 'GET',
    headers: {
      'x-apisports-key': API_KEY1
    }
  });
  
  const data = await response.json();
  
  if (data.response.length === 0) {
    alert('No team found!');
    return;
  }
  
  const team = data.response[0].team;
  const venue = data.response[0].venue;
  
  displayTeamProfile(team, venue);
}
function displayTeamProfile(team, venue) {
  const container = document.getElementById('teamProfile');
  container.style.display = 'block';
  
  container.innerHTML = `
        <img src="${team.logo}" alt="${team.name}">
        <h2>${team.name}</h2>
        <div class="info"><strong>Country:</strong> ${team.country}</div>
        <div class="info"><strong>Founded:</strong> ${team.founded}</div>
        <hr>
        <h3>Venue Info</h3>
        <div class="info"><strong>Name:</strong> ${venue.name}</div>
        <div class="info"><strong>City:</strong> ${venue.city}</div>
        <div class="info"><strong>Capacity:</strong> ${venue.capacity}</div>
        <img src="${venue.image}" alt="${venue.name}" class="venue-img">
    `;
}
//================== team section end================//

//================== news section ================//
 const API_KEY = '221a9348cdf44b1b8440e097c7988fee';  
const REFRESH_INTERVAL = 60000;  
async function fetchSportsNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=en&pageSize=10&apiKey=${API_KEY}`);
    const data = await response.json();

    if (data.status !== "ok") {
        console.error("Failed to fetch news:", data);
        return;
    }

    displayNews(data.articles);
}

function displayNews(articles) {
    const container = document.getElementById('newsList');
    container.innerHTML = '';  // Clear previous news

    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';

        newsCard.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x180'}" alt="News Image">
            <div class="news-title">${article.title}</div>
            <div class="news-source">${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}</div>
            <a href="${article.url}" target="_blank">Read Full Article</a>
        `;

        container.appendChild(newsCard);
    });
}

// Initial Load
fetchSportsNews();

// Auto Refresh every 60 seconds
setInterval(fetchSportsNews, REFRESH_INTERVAL);
 
//================== news section end================//
