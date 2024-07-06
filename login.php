<?php
$connection = odbc_connect("DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\\Path\\To\\Database.accdb", "", "");
if (!$connection) {
    echo "Connection failed";
    exit;
}
?>