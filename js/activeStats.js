const stats = document.querySelectorAll("h2.stats span.stat_content");
let statsContainers = {
  activePlayers: stats[0],
  registredPlayers: stats[3],
  daysFromStart: stats[2],
  assumedGilds: stats[1],
};

function updateStats() {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("GET", "./stats.php");
  httpRequest.send();

  todayDate = new Date();
  startDate = new Date("2020/05/05");
  days = Math.round(Math.abs(todayDate - startDate) / 1000 / 60 / 60 / 24);

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        statsContainers.activePlayers.textContent = JSON.parse(
          httpRequest.responseText
        )[0];
        statsContainers.registredPlayers.textContent = JSON.parse(
          httpRequest.responseText
        )[1];
        statsContainers.assumedGilds.textContent = JSON.parse(
          httpRequest.responseText
        )[2];
        statsContainers.daysFromStart.textContent = days;
      } else {
        console.log("There was a problem with the request.");
      }
    }
  }

  setTimeout(() => {
    updateStats();
  }, 3000);
}

updateStats();
