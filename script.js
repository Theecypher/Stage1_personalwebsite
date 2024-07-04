const day = document.querySelector(".day"),
time = document.querySelector(".time");

function displayTime () {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday" ]
    const d = new Date();
    const Day = daysOfWeek[d.getDay()];
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const utc = d.getTime();

    const times = d.toISOString().replace("T", "").substring(0, 19)
   day.innerHTML = `${Day}`;
    // time.innerHTML = `${hour} : ${min} : ${sec}`;
    time.innerHTML = `${utc}`;
}

displayTime();

setInterval(displayTime, 1000);