function clockRun() {
    const phoneClock = document.querySelector(".ipad-header-left > .clock");
    const phoneDate = document.querySelector(".ipad-header-left > .date");

    setInterval(() => {
        const now = new Date();

        const hours = now.getHours();
        const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

        const months = now.getMonth() + 1;
        const dates = now.getDate();
        const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const days = week[now.getDay()];

        const clock = `${hours}:${minutes}`;
        const date = `${months}월 ${dates}일 ${days}`;
        phoneClock.innerHTML = clock;
        phoneDate.innerHTML = date;

    }, 1000);
}

clockRun();
