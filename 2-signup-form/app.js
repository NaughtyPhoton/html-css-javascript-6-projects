const bannerEl = document.querySelector('.banner');
const formContainerEl = document.querySelector('.form-container');
const containerEl = document.querySelector('.container');

function onBannerClick() {
    bannerEl.style.display = 'none';
    formContainerEl.style.cssText = 'opacity: 1; visibility: visible;';
    containerEl.style.background = '#cc683c';
}

function onXClick() {
    bannerEl.style.display = 'flex';
    formContainerEl.style.cssText = 'opacity: 0; visibility: hidden;';
    containerEl.style.cssText = 'background: linear-gradient(to top, rgba(0, 0, 0, .4) 20%, ' +
        'rgba(0, 0, 0, .2)), url(images/haring-4.jpeg) center no-repeat; background-size: cover;';
}

document.querySelector('.banner-btn').addEventListener('click', onBannerClick);

document.querySelector('.x-btn').addEventListener('click', onXClick);
