<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $guests = $_POST['guests'];

    // SQLiteデータベースファイルのパス
    $dbpath = 'database/reservation.db';

    try {
        // SQLiteデータベースに接続
        $conn = new PDO("sqlite:$dbpath");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // SQLクエリを作成
        $sql = "INSERT INTO reservations (name, email, phone, date, time, guests) VALUES (:name, :email, :phone, :date, :time, :guests)";
        $stmt = $conn->prepare($sql);

        // パラメータをバインド
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':time', $time);
        $stmt->bindParam(':guests', $guests);

        // SQLクエリを実行
        $stmt->execute();

        echo "新しい予約が作成されました";
    } catch (PDOException $e) {
        echo "エラー: " . $e->getMessage();
    }

    // 接続を閉じる
    $conn = null;
}
else{
    echo "無効なリクエスト";
}
?>
