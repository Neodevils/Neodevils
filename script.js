const CURRENT_TIME = document.getElementById("current-time");
const CURRENT_DAY = document.getElementById("current-day");
const CURRENT_MONTH = document.getElementById("current-month");
const CURRENT_DATE = document.getElementById("current-date");

function refreshDateTime() {
    let now = new Date();

    let h = now.getHours().toString().padStart(2, "0"),
        m = now.getMinutes().toString().padStart(2, "0"),
        timeString = `${h}:${m}`;
    CURRENT_TIME.innerHTML = timeString;

    let day = now.toLocaleString("default", { weekday: "short" });
    CURRENT_DAY.innerHTML = `${day}`;

    let month = now.toLocaleString("default", { month: "short" });
    CURRENT_MONTH.innerHTML = `${month}`;

    let date = now.getDate().toString();
    CURRENT_DATE.innerHTML = `${date}`;
}

setInterval(refreshDateTime, 1000);
