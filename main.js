let content = document.getElementById("content");
let arr = [
    "Minh Châu ơi...",
    "Anh xin lỗi...",
    "Vì đã làm em buồn...",
    "Vì đã làm em khóc...",
    "Vì những lời nói vô tâm đó...",
    "Anh rất đau khổ khi 2 chúng ta không còn được như lúc đầu",
    "Và anh rất nhớ những giây phút 2 đứa bên nhau",
    "Những lúc bên em thật sự rất đáng giá",
    "Anh nhận ra mình quá ngu ngốc khi nói ra mấy lời lẻ đó",
    "Thật lòng anh chỉ muốn vả vào mặt anh ngay lúc đó",
    "Khó mà có thể kiếm được một người như em",
    "Sau tất cả anh muốn nói là...",
    "Chúng mình quay lại với nhau em nhé !",
    "Anh thật sự rất nhớ những phút giây 2 ta trò chuyện như thể đã là của nhau",
    "Anh muốn em bước đi cùng anh trên cuộc đời này",
    "Anh mong em cho anh một cơ hội",
    "Minh Châu à...",
    "Đồng ý làm người yêu của anh nhé !"
];
let index = 0;

function changeMessage() {
    if (index == arr.length) {
        content.style.fontSize = "40px";
        let music = document.getElementById("audio");
        music.play();
        setInterval(() => {
            createHeart();
        }, 200);
        return;
    }

    index += 1;
    
    if(index < arr.length) {
        content.innerText = arr[index];
    }
    else {
        return;
    }
}

setTimeout(() => {
    content.innerText = arr[0];
    setInterval(() => {
        changeMessage();
    }, 4000);
}, 4500);

function createHeart() {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s"; // tốc độ rơi khác nhau
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}


