

//==================page function===============//


    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
      document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }



//==================page function end===============//


//================== team section================//
const API_KEY = '5f76f3a07d900ee1751203c003111b37'; 

async function searchTeam() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) {
    alert('Please enter a team name.');
    return;
  }
  
  const response = await fetch(`https://v3.football.api-sports.io/teams?search=${query}`, {
    method: 'GET',
    headers: {
      'x-apisports-key': API_KEY
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
        <img src="${team.logo}" alt="${team.name}" draggable="false" >
        <h2 style="color:white;" >${team.name}</h2>
        <div class="info" style="color:white;"  ><strong style="color:goldenrod ;" >Country:</strong> ${team.country}</div>
        <div class="info"  style="color:white;" ><strong style="color:goldenrod ;" >Founded:</strong> ${team.founded}</div>
        <hr>
        <h3 style="color:goldenrod ;" >Venue Info</h3>
        <div class="info" style="color:white;" ><strong style="color:goldenrod ;" >Name:</strong> ${venue.name}</div>
        <div class="info" style="color:white;" ><strong style="color:goldenrod ;" >City:</strong> ${venue.city}</div>
        <div class="info"  style="color:white;" ><strong style="color:goldenrod ;" >Capacity:</strong> ${venue.capacity}</div>
        <img src="${venue.image}" alt="${venue.name}" class="venue-img"  draggable="false" >
    `;
}
//================== team section end================//


//================== news section ================//

const apiKey = "221a9348cdf44b1b8440e097c7988fee"; // Replace with your NewsAPI.org key
    const apiUrl = `https://newsapi.org/v2/everything?q=soccer&language=en&sortBy=publishedAt&apiKey=${apiKey}`;
    const newsContainer = document.getElementById("news-container");

    // Fetch news or get from localStorage
    async function fetchNews() {
      let cachedNews = localStorage.getItem("soccerNews");

      if (cachedNews) {
        displayNews(JSON.parse(cachedNews));
      } else {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (data.articles) {
            localStorage.setItem("soccerNews", JSON.stringify(data.articles));
            displayNews(data.articles);
          }
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }
    }

    // Display news
    function displayNews(articles) {
      newsContainer.innerHTML = "";
      articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/400'}" alt="News Image">
          <div class="news-content">
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read Full Article</a>
          </div>
        `;
        newsContainer.appendChild(card);
      });
    }

    fetchNews();
//================== news section end================//
