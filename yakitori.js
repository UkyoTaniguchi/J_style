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
            h1Element.style.backgroundImage = `url(${images[currentIndex]})`; //cssの背景画像にアクセス
            h1Element.style.opacity = 1; // フェードイン
            currentIndex = (currentIndex + 1) % images.length; //画像を更新、最後まで言ったら最初に
        }, 1300); // フェードアウトの時間と合わせる
    }

    setInterval(changeBackgroundImage, 7000); // 6秒ごとに背景画像を変更
    changeBackgroundImage(); // 最初の画像を設定

    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(reservationForm);

        fetch('reserve.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('予約が完了しました!');
            reservationForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('予約に失敗しました。もう一度お試しください。');
        });
    });
});
