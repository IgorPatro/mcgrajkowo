<?php
include('db_connect.php');

$nick = $_GET['nick'];

$query = ("SELECT COUNT(*) FROM 790761_mcgrajkowo WHERE realname = \"$nick\"");

if ($result = $mysqli->query($query)) {

   /* fetch associative array */
   while ($row = $result->fetch_assoc()) {
        if ($row['COUNT(*)'] > 0) {
          echo 'true';
        } else if ($row['COUNT(*)'] == 0) {
          echo 'false';
        }
   }

   /* free result set */
   $result->free();
}
