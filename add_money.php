<?php
require_once('Rcon.php');

$host = '94.130.37.139';
$port = 29061;
$password = '215215123';
$timeout = 3;

use Thedudeguy\Rcon;

$rcon = new Rcon($host, $port, $password, $timeout);

if ($rcon->connect())
{
  $rcon->sendCommand("pln daj ShuTTTo 10");
  $rcon->sendCommand("say Dałem ci 10 jeszcze");
}