

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

