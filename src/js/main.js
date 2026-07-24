(function () {
  var links = {
    weex: "https://www.weex.com/register?vipCode=xz3u",
    discord: "https://bit.ly/patreon-ramos",
    welcome: "https://www.weex.com/events/welcome-event?vipCode=xz3u&qrType=activity",
    stocks: "https://www.weex.com/events/promo/wxt-stocks?vipCode=xz3u&qrType=activity"
  };

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function initCountdown() {
    var countdown = document.querySelector("[data-countdown-days], [data-countdown-target]");

    if (!countdown) {
      return;
    }

    var countdownDays = Number(countdown.getAttribute("data-countdown-days"));
    var target = Number.isFinite(countdownDays) && countdownDays > 0
      ? Date.now() + countdownDays * 86400000
      : new Date(countdown.getAttribute("data-countdown-target")).getTime();
    var units = {
      days: countdown.querySelector('[data-unit="days"]'),
      hours: countdown.querySelector('[data-unit="hours"]'),
      minutes: countdown.querySelector('[data-unit="minutes"]'),
      seconds: countdown.querySelector('[data-unit="seconds"]')
    };

    function render() {
      var distance = Math.max(target - Date.now(), 0);
      var days = Math.floor(distance / 86400000);
      var hours = Math.floor((distance % 86400000) / 3600000);
      var minutes = Math.floor((distance % 3600000) / 60000);
      var seconds = Math.floor((distance % 60000) / 1000);

      units.days.textContent = pad(days);
      units.hours.textContent = pad(hours);
      units.minutes.textContent = pad(minutes);
      units.seconds.textContent = pad(seconds);

      if (distance <= 0) {
        window.clearInterval(timer);
      }
    }

    var timer = window.setInterval(render, 1000);
    render();
  }

  function initRedirects() {
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-redirect]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      var key = trigger.getAttribute("data-redirect");
      var url = links[key];

      if (url) {
        window.location.href = url;
      }
    });
  }

  initCountdown();
  initRedirects();
})();
