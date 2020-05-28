<?php
include('db_connect.php');

$activePlayers = ("SELECT COUNT(*) FROM 790761_mcgrajkowo WHERE isLogged = 1");
$registredPlayers = ("SELECT COUNT(*) FROM 790761_mcgrajkowo");
$assumedGilds = ("SELECT COUNT(*) FROM guilds");

$stats = [];

if ($resultOne = $mysqli->query($activePlayers)) {

   /* fetch associative array */
   while ($row = $resultOne->fetch_assoc()) {
      array_push($stats, $row['COUNT(*)']);
   }

   /* free result set */
   $resultOne->free();
}

if ($resultTwo = $mysqli->query($registredPlayers)) {

   /* fetch associative array */
   while ($row = $resultTwo->fetch_assoc()) {
      array_push($stats, $row['COUNT(*)']);
   }

   /* free result set */
   $resultTwo->free();
}

if ($resultThree = $mysqli->query($assumedGilds)) {

   /* fetch associative array */
   while ($row = $resultThree->fetch_assoc()) {
      array_push($stats, $row['COUNT(*)']);
   }

   /* free result set */
   $resultThree->free();
}

print_r(json_encode($stats));
