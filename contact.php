<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $company = htmlspecialchars($_POST['company']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $prefecture = htmlspecialchars($_POST['prefecture']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "お問い合わせ from $name";
    $body = "
        お名前: $name\n
        会社名: $company\n
        E-Mail: $email\n
        電話番号: $phone\n
        都道府県: $prefecture\n
        お問い合わせ内容:\n$message
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "お問い合わせが送信されました。ありがとうございます。";
    } else {
        echo "送信中にエラーが発生しました。";
    }
} else {
    echo "無効なリクエストです。";
}
?>
