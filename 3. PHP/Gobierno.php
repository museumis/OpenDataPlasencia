<?php

//fichero php para el manejo de la tabla Gobierno. Si tuviera más tablas debería crear un fichero por cada tabla que tuviese.

/**
 * Representa el la estructura de las Gobierno
 * almacenadas en la base de datos
 */
require 'Database.php';

class Gobierno {

    function __construct() {
        
    }

    /**
     * Retorna en la fila especificada de la tabla 'Gobierno'
     *
     * @param $id Identificador del registro. No utilizado aqui
     * @return array Datos del registro
     */
    public static function getAll() { //Me devuelve todos los registros de la tabla Gobierno
        $consulta = "SELECT * FROM gobierno";
        try {
            // Preparar sentencia
            $comando = Database::getInstance()->getDb()->prepare($consulta);
            // Ejecutar sentencia preparada
            $comando->execute();

            return $comando->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return false;
        }
    }
}
?>