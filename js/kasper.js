let DownBtn = document.getElementsByClassName("down-btn")[0];
DownBtn.onclick = function () {
window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
});
};
