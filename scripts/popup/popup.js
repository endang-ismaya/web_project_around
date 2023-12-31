let btnEditProfile = document.querySelector('.profile__edit');
let btnClosePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.form__item_el_nama');
let inputAbout = document.querySelector('.form__item_el_tentang-saya');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let formEditProfile = document.querySelector('.form');

// show edit profile
function handleProfileFormShow() {
    popup.classList.add('popup_opened');

    // assign to inputs
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

// hide edit profile
function handleProfileFormHide() {
    popup.classList.remove('popup_opened');
}

// form
function handleProfileFormSubmit(evt) {
    // ignore default behaviour
    evt.preventDefault();

    // set profile name, about elements
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;

    // close the form
    handleProfileFormHide();
}

// assign button
btnEditProfile.addEventListener('click', handleProfileFormShow);
btnClosePopup.addEventListener('click', handleProfileFormHide);
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
