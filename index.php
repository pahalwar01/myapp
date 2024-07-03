<?php 
// Connection parameters 
$dsn = "Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=<mirchirider.accdb"; 
 
// Connect to the database 
$conn = odbc_connect($dsn, '', ''); 
 
if (!$conn) { 
    die("Connection failed: " . odbc_errormsg()); 
} 
 
// Query the database 
$query = "SELECT * FROM your_table"; 
$result = odbc_exec($conn, $query); 
 
// Display data in HTML table 
echo "<table border='1'>"; 
while ($row = odbc_fetch_array($result)) { 
    echo "<tr><td>" . $row['column1'] . "</td><td>" . $row['column2'] . "</td></tr>"; 
} 
echo "</table>"; 
 
// Close the connection 
odbc_close($conn); 
?> 