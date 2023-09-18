let btnEditProfile = document.querySelector(".profile__edit");
let btnClosePopup = document.querySelector(".form__close");
let popup = document.querySelector(".popup");
let page = document.querySelector(".page");
let inputName = document.querySelector(".form__item_el_nama");
let inputAbout = document.querySelector(".form__item_el_tentang-saya");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let formEditProfile = document.querySelector(".form__edit-profile");
let btnFormSubmit = document.querySelector(".form__button");

// show edit profile
function handleProfileFormShow() {
    popup.classList.add("popup_opened");
    page.classList.add("page_overlay");

    // assign to inputs
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

// hide edit profile
function handleProfileFormHide() {
    popup.classList.remove("popup_opened");
    page.classList.remove("page_overlay");
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

// check input is blank
function handleInputCheckEmpty(e) {
    if (e.target.value.trim() == "") {
        btnFormSubmit.setAttribute("disabled", true);
    } else {
        if (btnFormSubmit.hasAttribute("disabled")) {
            btnFormSubmit.removeAttribute("disabled");
        }
    }
}

// check if name or about is blank
inputName.addEventListener("keyup", handleInputCheckEmpty);
inputAbout.addEventListener("keyup", handleInputCheckEmpty);

// assign button
btnEditProfile.addEventListener("click", handleProfileFormShow);
btnClosePopup.addEventListener("click", handleProfileFormHide);
formEditProfile.addEventListener("submit", handleProfileFormSubmit);
