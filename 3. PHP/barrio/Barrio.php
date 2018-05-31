<?php

//fichero php para el manejo de la tabla Gobierno. Si tuviera más tablas debería crear un fichero por cada tabla que tuviese.

/**
 * Representa el la estructura de las Gobierno
 * almacenadas en la base de datos
 */
require '../Ayuntamiento/Database.php';

class Barrio {

    function __construct() {
        
    }

    /**
     * Retorna en la fila especificada de la tabla 'Gobierno'
     *
     * @param $id Identificador del registro. No utilizado aqui
     * @return array Datos del registro
     */
    public static function getAll() { //Me devuelve todos los registros de la tabla Gobierno
        $consulta = "SELECT 
                    barrio.NOMBRE AS 'Barrio',
                    asociacion_vecino.NOMBRE As 'Asociacion',
                    asociacion_vecino.DIRECCION AS 'Direc',
                    asociacion_vecino.TELEFONO AS 'Telf',
                    asociacion_vecino.CorreoElectronico AS 'Correo',
                    organismo.NOMBRE AS 'CentroDeSalud',
                    organismo.DIRECCION AS 'Direcc',
                    organismo.TELEFONO AS 'Telef'
                    FROM (((organismo
                    INNER JOIN claseorganismo ON organismo.COD_ORGANISMO=claseorganismo.COD_ORGANISMO)
                    INNER JOIN centro_salud ON centro_salud.COD_CLASEORG = claseorganismo.COD_CLASEORG)
                    INNER JOIN barrio ON centro_salud.COD_CENTROSALUD=barrio.CENTRO_SALUD)
                    INNER JOIN asociacion_vecino ON barrio.COD_BARRIO=asociacion_vecino.COD_BARRIO";
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