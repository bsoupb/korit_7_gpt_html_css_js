const backButton = document.querySelector(".back-button");
backButton.onclick = () => {
    goback();
}


function goback() {
    location.href = "./list.html";
}
