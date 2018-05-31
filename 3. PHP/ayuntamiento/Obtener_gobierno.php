<?php
/**
 * Obtiene todas los gobernantes de la base de datos
 */

require 'Gobierno.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Manejar petici�n GET
    $gobierno = Gobierno::getAll(); //Ejecuta el metodo getAll() de la clase Gobierno

    if ($gobierno) {

        $datos["estado"] = 1;
        $datos["gobierno"] = $gobierno;

       // print xmlrpc_encode($datos);//Estructura de resultado en XML
        print json_encode($datos); //Estructura de resultado en JOSN
                                    
    } else {
        print json_encode(array( 
            "estado" => 2,
            "mensaje" => "Ha ocurrido un error"
        ));
    }
}

