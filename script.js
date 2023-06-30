const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block";

  setTimeout(function() {
    notification.style.display = "none";
  }, 3000); // Menyembunyikan notifikasi setelah 3 detik (3000ms)
}
// // Timer function
// function startTimer(duration, display) {
//   var timer = duration, hours, minutes, seconds;
//   setInterval(function () {
//     hours = parseInt(timer / 3600, 10);
//     minutes = parseInt((timer % 3600) / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = hours + ":" + minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// // Start the timer
// window.onload = function () {
//   var duration = 60 * 30 * 1; // 2 hours (change it according to your needs)
//   var display = document.querySelector('#timer');
//   startTimer(duration, display);
  
// };
// Timer function
function startTimer(duration, display) {
  var timer = duration, hours, minutes, seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// Start the timers
window.onload = function () {
  var timers = document.querySelectorAll('.timer');

  timers.forEach(function (timerElement) {
    var duration = parseInt(timerElement.getAttribute('data-duration'), 10);
    var display = timerElement.querySelector('.timer-display');
    startTimer(duration, display);
  });
};
