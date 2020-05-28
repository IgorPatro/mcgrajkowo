<?php
$dbServer = 'sql.pukawka.pl:3306'; // serwer
$dbUser = '790761'; // user
$dbPassword = 'QdmoeOz7rk9iXuu'; // hasło
$dbName = '790761_mcgrajkowo'; // nazwa bazy

$mysqli = new mysqli($dbServer, $dbUser, $dbPassword, $dbName); // połączenie
$mysqli->set_charset("utf8");
if (mysqli_connect_errno()) { // jeżeli brak połączenia
   echo 'Błąd bazy danych';
}

