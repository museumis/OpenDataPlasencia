<?php

//fichero php para el manejo de la tabla Gobierno. Si tuviera más tablas debería crear un fichero por cada tabla que tuviese.

/**
 * Representa el la estructura de las Gobierno
 * almacenadas en la base de datos
 */
require '../Ayuntamiento/Database.php';

class Inicio {

    function __construct() {
        
    }

    /**
     * Retorna en la fila especificada de la tabla 'Gobierno'
     *
     * @param $id Identificador del registro. No utilizado aqui
     * @return array Datos del registro
     */
    public static function getAll() { //Me devuelve todos los registros de la tabla Gobierno
        $consulta = "SELECT ciudad.NOMBRE,ciudad.PAIS,ciudad.CODIGO_POSTAL,ciudad.POBLACION,ciudad.FIESTAS_INICIO,ciudad.FIESTAS_FIN,ciudad.PAGINA_WEB,ciudad.GOOGLE_MAP FROM `ciudad`  ";
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