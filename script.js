const date = new Date();
const renderCalendar = () => {
    date.setDate(1);

    const monthdays = document.querySelector('.days');

    const lastday = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
    ).getDate();
    console.log(lastday);

    const prevlastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0,
    ).getDate();

    console.log('prevlast day', prevlastDay);

    const firstdayIndex = date.getDay() - 1;

    console.log('firstdayIndex', firstdayIndex);

    const lastdayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0,
    ).getDay();

    const nextDays = 7 - lastdayIndex - 1;
    console.log('next days', nextDays);
    console.log('last day index', lastdayIndex);

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = '';

    for (let x = firstdayIndex; x >= 0; x--) {
        days += `<div class="prev-date">${prevlastDay - x}</div>`;
    }
    for (let i = 1; i <= lastday; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        // monthdays.innerHTML = days;
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthdays.innerHTML = days;
    }
};

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
