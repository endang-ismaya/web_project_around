btnLikes = document.querySelectorAll(".cards__action span");

function handleToggleBtnLike(e) {
    let btnLike = e.target;

    if (btnLike.classList.contains("icon__type_like")) {
        btnLike.classList.remove("icon__type_like");
        btnLike.classList.add("icon__type_like_active");
    } else {
        btnLike.classList.add("icon__type_like");
        btnLike.classList.remove("icon__type_like_active");
    }
}

if (btnLikes) {
    btnLikes.forEach((item) => {
        item.addEventListener("click", handleToggleBtnLike);
    });
}
