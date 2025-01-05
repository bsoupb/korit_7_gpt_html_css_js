let boardInputDatas = {
    id: 0,
    title: "",
    content: "",
    person: "",
};

function setInputsEvent() {
    const titleText = document.querySelector(".title");
    const contentText = document.querySelector(".content");
    const personText = document.querySelector(".person");

    titleText.onkeyup = handleBoardInputOnChange;
    contentText.onkeyup = handleBoardInputOnChange;
    personText.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
    const submitButton = document.querySelector(".save-link");
    submitButton.onclick = handleSubmitOnClick;
}

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

function handleSubmitOnClick() {
    saveBoard();
    clear();
}

function saveBoard() {
    let boardDatas = !!localStorage.getItem("boardDatas")
        ? JSON.parse(localStorage.getItem("boardDatas"))
        : [];

    if(boardDatas.length > 0) {
        boardInputDatas.id = boardDatas[boardDatas.length - 1];
    }

    boardDatas = [
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));

    alert("게시글 작성 완료");
    location.href = "./list.html";
}

function clear() {
    const titleText = document.querySelector(".title");
    const contentText = document.querySelector(".content");
    const personText = document.querySelector(".person");

    const inputs = [titleText, contentText, personText];
    inputs.forEach(input => input.value = "");
    boardInputDatas = {
        title: "",
        content: "",
        person: "",
    };
}

setInputsEvent();
setButtonEvent();