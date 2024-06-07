document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'image/yakitori.jpg',  // 1枚目の画像パス
        'image/sample1.jpg',  // 2枚目の画像パス
        'image/sample2.jpg'   // 3枚目の画像パス
    ];

    let currentIndex = 0;
    const h1Element = document.querySelector('#slideshow');

    function changeBackgroundImage() {
        h1Element.style.opacity = 0; // フェードアウト

        setTimeout(() => {
            h1Element.style.backgroundImage = `url(${images[currentIndex]})`; //
            h1Element.style.opacity = 1; // フェードイン
            currentIndex = (currentIndex + 1) % images.length; //画像を更新、最後まで言ったら最初に
        }, 1200); // フェードアウトの時間と合わせる
    }

    setInterval(changeBackgroundImage, 7000); // 6秒ごとに背景画像を変更
    changeBackgroundImage(); // 最初の画像を設定
});
