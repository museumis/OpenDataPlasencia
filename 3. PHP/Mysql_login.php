<?php
/**
 * Provee las constantes para conectarse a la base de datos
 * Mysql.
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
define("HOSTNAME", "localhost");// Nombre del host. Siempre va a ser localhost ya que lo normal es alojar los php en la misma máquina donde esta la base de datos
define("DATABASE", "id4499805_opendataplasencia"); // Nombre de la base de datos. Me lo da "Hostinguer" o la cuenta de hosting que haya contratado.
define("USERNAME", "id4499805_si"); // Nombre del usuario. Me lo da "Hostinguer" o la cuenta de hosting que haya contratado.
define("PASSWORD", "imartinr01@informatica.iesvalledeljerteplasencia.es"); // Nombre de la constraseña. Me lo da "Hostinguer" o la cuenta de hosting que haya contratado.
?>