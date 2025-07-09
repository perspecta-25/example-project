<?php
// 1. Get POST data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$number =$_POST['number'] ?? '';
$message = $_POST['message'] ?? '';

// 2. Validate input (basic)
// if (empty($name) || empty($email) || empty($message)) {
//     die("All fields are required.");
// }

// 


// 3. Connect to the database
$host = 'localhost';
$dbname = 'test_base';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 4. Prepare and execute SQL query
$stmt = $conn->prepare("INSERT INTO contacts (name, email, number, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $number, $message);

if ($stmt->execute()) {
    echo "Message received. Thank you!";
} else {
    echo "Error: " . $stmt->error;
}

// 5. Close connection
$stmt->close();
$conn->close();
?>