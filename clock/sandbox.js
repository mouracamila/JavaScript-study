const clock = document.querySelector('.clock');
const dateNow = document.querySelector('.dateNow');

const tick = () => {

    const now = new Date();

    const h = dateFns.format(now, 'HH');
    const m = dateFns.format(now, 'mm');
    const s = dateFns.format(now, 'ss');
    
    const date = dateFns.format(now, 'dddd Do MMMM YYYY');
    
    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>         
    `;

    clock.innerHTML = html;
    dateNow.innerHTML = `<span>${date}</span>`;
};

setInterval(tick, 1000);

