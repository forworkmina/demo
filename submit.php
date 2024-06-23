<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $category = $_POST['category'];
    $responses = $_POST['responses'];
    
    // Simplified eligibility logic for demonstration purposes
    $isEligible = rand(0, 1) === 1; // Randomly assign eligibility for demonstration
    
    echo json_encode(['eligible' => $isEligible]);
}
?>
