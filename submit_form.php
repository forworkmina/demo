<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $prefecture = $_POST['prefecture'];
    $message = $_POST['message'];

    // Data to be saved in CSV format
    $data = [$name, $company, $email, $phone, $prefecture, $message];

    // File path to save the data
    $file = 'contact_data.csv';

    // Open the file in append mode
    $handle = fopen($file, 'a');

    // Write the data to the file
    fputcsv($handle, $data);

    // Close the file
    fclose($handle);

    // Redirect to a thank you page (optional)
    header("Location: thank_you.html");
    exit;
}
?>
