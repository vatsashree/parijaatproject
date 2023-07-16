<?php
// Assuming you have established the database connection
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$location = $_POST['location'];
$pincode = $_POST['pincode'];

// Prepare the SQL statement
$sql = "INSERT INTO submissions (name, age, gender, location, pincode) 
        VALUES ('$name', '$age', '$gender', '$location', '$pincode')";

// Execute the SQL statement
$result = mysqli_query($connection, $sql);

// Check for successful insertion
if ($result) {
  echo "Data inserted successfully!";
} else {
  echo "Error: " . mysqli_error($connection);
}
?>
