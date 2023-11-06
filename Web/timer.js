var intervalId;

clearInterval(intervalId);
intervalId = setInterval(function () {
  var now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}, 1000);

function getRandomFutureDate() {
  var now = new Date();
  var minutesToAdd = Math.floor(Math.random() * 51) + 10; // Generate a random number between 10 and 60
  now.setMinutes(now.getMinutes() + minutesToAdd);
  return now;
}

var nextEpisodeDates = [
  getRandomFutureDate(), // Set the date and time of the next episode for the first anime
  getRandomFutureDate(),
  getRandomFutureDate(),
  getRandomFutureDate(),
];

function updateCountdown(id, nextEpisodeDate) {
  var now = new Date();
  var distance = nextEpisodeDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(id).textContent =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(function () {
  updateCountdown("countdown1", nextEpisodeDates[0]);
  updateCountdown("countdown2", nextEpisodeDates[1]);
  updateCountdown("countdown3", nextEpisodeDates[2]);
  updateCountdown("countdown4", nextEpisodeDates[3]);
}, 1000);
