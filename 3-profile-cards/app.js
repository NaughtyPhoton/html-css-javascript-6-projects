const heading = 'Please Meet Our Team';
const headerEl = document.querySelector('.heading');

let i = 0;

const typing = () => {
    if (i < heading.length) {
        headerEl.innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150)
    }
};

typing();
