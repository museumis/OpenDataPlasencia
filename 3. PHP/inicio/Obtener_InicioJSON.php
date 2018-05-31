<?php
/**
 * Obtiene todas los barrios de la base de datos
 */

require 'Inicio.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Manejar petici�n GET
    $respuesta = Inicio::getAll(); //Ejecuta el metodo getAll() de la clase que se desea mapear

    if ($respuesta) {

        $datos["estado"] = 1;
        $datos["respuesta"] = $respuesta;

       // print xmlrpc_encode($datos);//Estructura de resultado en XML
        print json_encode($datos); //Estructura de resultado en JOSN
                                    
    } else {
        print json_encode(array( 
            "estado" => 2,
            "mensaje" => "Ha ocurrido un error"
        ));
    }
}

