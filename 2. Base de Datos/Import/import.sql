-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2017 a las 02:44:17
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `opendataplasencia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asociacion_vecino`
--

CREATE TABLE `asociacion_vecino` (
  `COD_ASOCIACION` int(11) NOT NULL,
  `COD_BARRIO` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `CorreoElectronico` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asociacion_vecino`
--

INSERT INTO `asociacion_vecino` (`COD_ASOCIACION`, `COD_BARRIO`, `NOMBRE`, `DIRECCION`, `TELEFONO`, `CorreoElectronico`) VALUES
(1, 1, 'Rosal de Ayala', 'C/ Enrique de Egas, 1', '927 42 64 56 / 651 96 12 29', 'asociacionrosalayala@hotmail.com'),
(2, 2, 'Miralvalle', 'C/ Enrique de Egas, 0', '927 41 08 99 / 686 06 66 57', 'asociacion-miralvalle@hotmail.com'),
(3, 3, 'El Pilar Plaza De Toros', 'Calle Miguel Martínez, 4', '927 42 41 00 / 674 183 125', 'pilarplasezadetoros@hotmail.com'),
(4, 5, 'La Data', 'C/ Cañada Real, s/n (Centro Cívico)', '927 41 59 10', 'asociacionrosalayala@hotmail.com'),
(5, 6, 'Vecinos Río Jerte', 'C/ Pedro Diez García, 1', '927 41 48 44', NULL),
(6, 23, 'Valcorchero', 'C/ Félix Rodríguez de la Fuente, nº 6', '609 17 50 27', ' vecinosvalcorchero@vecinosvalcorchero.es'),
(7, 13, 'Ciudad Jardín', NULL, NULL, 'ciudadjardinplasencia@hotmail.com'),
(8, 6, 'Río Jerte', 'C/Pedro Díez García, s/n', '927 41 88 29 / 680 235 024', 'asociacion.riojerte1@gmail.com'),
(9, 3, 'Cotillo de San Antón \"Barrio del Pilar\"', 'Centro Cívico \"El Pilar\" C/ San Antón, s/n', '927 42 45 98 / 620 53 83 02', 'juanpablo@elcotillo / marigarc2002@hotmail.com'),
(10, 4, 'Cerro San Miguel La Unión', 'C/ San Miguel, s/n', '619418564', 'jaimcoll@msn.com'),
(11, 8, 'Urbanización La Esperanza', 'C/ Jacinto Benavente, nº 2- 3ºb', '927 41 10 75', NULL),
(12, 13, 'Sierra Santa Bárbara', 'Avenida La Salle, nº 22- 3º', '927 42 70 12/610 71 11 46', NULL),
(13, 9, 'Barrio Los Mártires ', 'San Fabián, nº 5 ', '620828611 ', 'marcelpuerto@hotmail.com'),
(14, 10, 'Vera-Elena', 'C/ Beatriz de Trejo, nº 1', '927 41 88 02/651 69 03 29', 'upe64@hotmail.com'),
(15, 11, 'Los Alamitos', 'Cañada Real, 4, 3º A', '927 42 09 12', 'joseantonio@cuacosdeyuste.com'),
(16, 15, 'Los Majuelos', 'C/ Francisco de Malpartida, nº 12', '629300359', 'juanma@majuma.es'),
(17, 16, 'Valle-Isla', 'C/ Santo Domingo de Guzmán, nº 3- 4º C', '927 41 23 35', NULL),
(18, 12, 'V.Puerto-Los Pinos', 'Plaza de los Pinos, nº 12- Bajo', '654351218', 'felixgm@hotmail.com'),
(19, 25, 'Intramuros de Plasencia', 'C/ Rincón de la Magdalena, nº 6', '646482680', 'jugude2002@yahoo.es'),
(20, 17, 'Cuatro Calzadas', 'C/ Cardenal Siliceo, nº 7', '615411226', NULL),
(21, 18, 'Ribera del Valle', 'Avda. Dolores Ibarruri, Nº 37- 1º A', '699117484', 'yholae@hotmail.com'),
(22, 14, 'Ruben Darío Gabriel y Galán', 'Avda. Gabriel y Galán, nº4- 2º A', '619828043', 'cdominguezperez64@gmail.com'),
(23, 21, 'San Juan', 'C/ Diego de Jerez, s/n', '628 78 32 81', 'avsanjuanpl@gmail.com'),
(24, 7, 'Ciudad Jardín San Antón', 'C/ Brezo, nº 11', '927 40 00 93 / 660 41 68 81', 'rauzid@hotmail.com'),
(26, 24, 'Los Monjes', 'C/ Del Níscalo, nº 3- portal 2- 5º A', '617661997', 'losmonjesplasencia@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barrio`
--

CREATE TABLE `barrio` (
  `COD_BARRIO` int(11) NOT NULL,
  `COD_CIUDAD` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `CENTRO_SALUD` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `barrio`
--

INSERT INTO `barrio` (`COD_BARRIO`, `COD_CIUDAD`, `NOMBRE`, `CENTRO_SALUD`) VALUES
(1, 1, 'Rosal de Ayala', 1),
(2, 1, 'Miralvalle', 3),
(3, 1, 'El Pilar', 3),
(4, 1, 'San Miguel', 2),
(5, 1, 'La Data', 2),
(6, 1, 'Río Jerte', 2),
(7, 1, 'Cotillo de San Antón ', 2),
(8, 1, 'La Esperanza', 3),
(9, 1, 'Los Mártires', 1),
(10, 1, 'Vera Elena', 1),
(11, 1, 'Los Alamitos', 3),
(12, 1, 'Los Pinos', 3),
(13, 1, 'Sierra Santa Bárbara', 2),
(14, 1, 'Rubén Darío', 3),
(15, 1, 'Los Majuelos', NULL),
(16, 1, 'Valle Isla', 1),
(17, 1, 'Cuatro Calzadas', NULL),
(18, 1, 'Ribera del Valle', NULL),
(19, 1, 'Gabriel y Galán', 3),
(20, 1, 'La Unión', NULL),
(21, 1, 'San Juan', 2),
(22, 1, 'Ciudad Jardín San Antón', 2),
(23, 1, 'Valcorchero', 3),
(24, 1, 'Los Monjes', 1),
(25, 1, 'Intramuros de Plasencia', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `COD_DEPARTAMENTO` int(11) NOT NULL,
  `COD_UNIVERSIDAD` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `NUMERO_PLAZAS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`COD_DEPARTAMENTO`, `COD_UNIVERSIDAD`, `NOMBRE`, `NUMERO_PLAZAS`) VALUES
(1, 1, 'Grado en Administración y Dirección de Empresas', 200),
(2, 1, 'Grado en Enfermería', 100),
(3, 1, 'Grado en Ingeniería Forestal y del Medio Natural', 150),
(4, 1, 'Grado en Podología', 150),
(1, 2, 'Filosofía', 200),
(2, 2, 'Historia', 200),
(3, 2, 'Ciencias Físicas', 150),
(4, 2, 'Derecho', 150);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro_salud`
--

CREATE TABLE `centro_salud` (
  `COD_CENTROSALUD` int(11) NOT NULL,
  `COD_CLASEORG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `centro_salud`
--

INSERT INTO `centro_salud` (`COD_CENTROSALUD`, `COD_CLASEORG`) VALUES
(1, 8),
(2, 9),
(3, 10),
(4, 11),
(5, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `COD_CIUDAD` int(11) NOT NULL,
  `NOMBRE` varchar(20) DEFAULT NULL,
  `PAIS` varchar(20) DEFAULT NULL,
  `PAGINA_WEB` varchar(50) DEFAULT NULL,
  `GOOGLE_MAP` varchar(50) DEFAULT NULL,
  `POBLACION` int(11) DEFAULT NULL,
  `FIESTAS_INICIO` date DEFAULT NULL,
  `FIESTAS_FIN` date DEFAULT NULL,
  `CODIGO_POSTAL` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ciudad`
--

INSERT INTO `ciudad` (`COD_CIUDAD`, `NOMBRE`, `PAIS`, `PAGINA_WEB`, `GOOGLE_MAP`, `POBLACION`, `FIESTAS_INICIO`, `FIESTAS_FIN`, `CODIGO_POSTAL`) VALUES
(1, 'Plasencia', 'España', 'http://www.plasencia.es', 'https://www.google.es/maps/place/Plasencia', 40663, '2017-07-31', '2017-08-02', '10600');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `claseorganismo`
--

CREATE TABLE `claseorganismo` (
  `COD_CLASEORG` int(11) NOT NULL,
  `COD_ORGANISMO` int(11) NOT NULL,
  `INSTITUCION` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `claseorganismo`
--

INSERT INTO `claseorganismo` (`COD_CLASEORG`, `COD_ORGANISMO`, `INSTITUCION`) VALUES
(1, 8, 'Instituto'),
(2, 9, 'Instituto'),
(3, 10, 'Instituto'),
(4, 11, 'Instituto'),
(5, 12, 'Universidad'),
(6, 13, 'Universidad'),
(7, 14, 'Hospital'),
(8, 15, 'Centro de Salud'),
(9, 16, 'Centro de Salud'),
(10, 17, 'Centro de Salud'),
(11, 18, 'Centro de Salud'),
(12, 19, 'Centro de Salud');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `COD_DEPARTAMENTO` int(11) NOT NULL,
  `COD_INSTITUTO` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `NUMERO_PLAZAS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`COD_DEPARTAMENTO`, `COD_INSTITUTO`, `NOMBRE`, `NUMERO_PLAZAS`) VALUES
(1, 1, 'Informática y Comunicaciones', 100),
(1, 2, 'Filosofía', 50),
(1, 3, 'Proyecto de Edificación y obra Civil', 50),
(1, 4, 'Inglés', 30),
(2, 1, 'Tecnología', 50),
(2, 2, 'Física y Química', 50),
(2, 3, 'Inglés', 30),
(2, 4, 'Música', 30),
(3, 1, 'Inglés', 50),
(3, 2, 'Economía', 50),
(3, 3, 'Música', 30),
(4, 1, 'Música', 50),
(4, 2, 'Peluquería', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gobierno`
--

CREATE TABLE `gobierno` (
  `COD_GOBERNANTE` int(11) NOT NULL,
  `COD_CIUDAD` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `MINISTERIO` varchar(125) DEFAULT NULL,
  `FECHA_INICIO` date DEFAULT NULL,
  `FECHA_FIN` date DEFAULT NULL,
  `ALCALDE` int(11) DEFAULT NULL,
  `CORREOELECTRONICO` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `FAX` varchar(50) DEFAULT NULL,
  `WEB` varchar(150) DEFAULT NULL,
  `TWITTER` varchar(50) DEFAULT NULL,
  `FACEBOOK` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gobierno`
--

INSERT INTO `gobierno` (`COD_GOBERNANTE`, `COD_CIUDAD`, `NOMBRE`, `MINISTERIO`, `FECHA_INICIO`, `FECHA_FIN`, `ALCALDE`, `CORREOELECTRONICO`, `TELEFONO`, `FAX`, `WEB`, `TWITTER`, `FACEBOOK`) VALUES
(1, 1, 'Fernando Pizarro García', 'Alcaldia', '2015-05-24', NULL, 1, 'alcaldia@aytoplasencia.es', '927 42 85 00', '927 42 85 00', NULL, NULL, NULL),
(2, 1, 'Luis Díaz Sánchez', 'Juventud', '2015-05-24', NULL, 1, 'concejaliajuventud@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(3, 1, 'Fernando Pizarro', 'Educación y Patrimonio', '2015-05-24', NULL, 1, 'alcaldia@aytoplasencia.es', '27 42 85 00', '927 418 473', NULL, NULL, NULL),
(4, 1, 'David Dóniga Estévez', 'Deportes, Innovación, Comunicación, Distritos y Fomento', '2015-05-24', NULL, 1, NULL, '927 42 85 00', 'fomento.deportes@outlook.es', 'www.deporteplasencia.com', '@dxtplasencia', 'http://www.facebook.com/concejalia.deporteplasencia'),
(5, 1, 'Mª Luisa Bermejo', 'Cultura', '2015-05-24', NULL, 1, 'prococultural@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(6, 1, 'Sonia Grande Sánchez', 'Recursos Humanos, Empleo, Empresa, Interior y Administración General', '2015-05-24', NULL, 1, 'admongeneral@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(7, 1, ' José Antonio Hernández ', 'Hacienda, Urbanismo y Fondos Europeos', '2015-05-24', NULL, 1, 'haciendayurbanismo@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(8, 1, 'Flor Conejero Fernández', 'Servicios Sociales y Mayores', '2015-05-24', NULL, 1, 'concejaliassociales@plasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(9, 1, 'Luis Díaz González', 'Relaciones Institucionales', '2015-05-24', NULL, 1, NULL, '927 42 85 00', ' 927 42 13 04', NULL, NULL, NULL),
(10, 1, 'Mª Teresa Díaz', 'Familia, Igualdad, Accesibilidad y Dependencia', '2015-05-24', NULL, 1, 'concejaliafamilia@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(11, 1, 'Luis Miguel Pérez', 'Servicios Municipales, Sanidad y Medio Ambiente', '2015-05-24', NULL, 1, 'sanidadmayssmm@aytoplasencia.es', '927 42 85 00', '927 42 13 04', NULL, NULL, NULL),
(12, 1, 'Isidro Rodríguez', 'Turismo', '2015-05-24', NULL, 1, 'concejaliaturismo@plasencia.es', '927 42 85 00 / 662323720 /Extensión 5054/5055/5056', '927 42 13 04', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital`
--

CREATE TABLE `hospital` (
  `COD_HOSPITAL` int(11) NOT NULL,
  `COD_CLASEORG` int(11) NOT NULL,
  `NUMERO_CAMAS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hospital`
--

INSERT INTO `hospital` (`COD_HOSPITAL`, `COD_CLASEORG`, `NUMERO_CAMAS`) VALUES
(1, 7, 250);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instituto`
--

CREATE TABLE `instituto` (
  `COD_INSTITUTO` int(11) NOT NULL,
  `COD_CLASEORG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `instituto`
--

INSERT INTO `instituto` (`COD_INSTITUTO`, `COD_CLASEORG`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organismo`
--

CREATE TABLE `organismo` (
  `COD_ORGANISMO` int(11) NOT NULL,
  `COD_CIUDAD` int(11) NOT NULL,
  `NOMBRE` varchar(50) DEFAULT NULL,
  `DIRECCION` varchar(50) DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `TIPO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `organismo`
--

INSERT INTO `organismo` (`COD_ORGANISMO`, `COD_CIUDAD`, `NOMBRE`, `DIRECCION`, `TELEFONO`, `TIPO`) VALUES
(1, 1, 'Parque Comarcal de bomberos de Plasencia', 'Polígono Industrial. C/ Juan de la Cierva  s/n', '080/927 410 080/927 427 063', 'Seguridad'),
(2, 1, 'Jefatura de la Policía Local', 'Avenida de las Acacias, s/n (La Mazuela)', '092/927 42 13 15/927 42 65 64', 'Seguridad'),
(3, 1, 'C.C.E.I.P.S San Calixto', 'Av. Virgen del Puerto', '927 41 13 47', 'Educación'),
(4, 1, 'C.E.I.P. Miralvalle', 'Calle Cayetano García Martín', '927 01 78 00', 'Educación'),
(5, 1, 'Colegio Público El Pilar', 'Av. Extremadura', '927 41 13 47', 'Educación'),
(6, 1, 'C.E.I.P. Alfonso VIII', 'Calle Cristo de las Batallas', '927 01 77 96', 'Educación'),
(7, 1, 'CEIP Inés Suárez', 'Parque de la Coronación', '927 01 77 84', 'Educación'),
(8, 1, 'IES Valle del Jerte', 'Calle Pedro y Francisco González', '927 01 77 74', 'Educación'),
(9, 1, 'I.E.S. Gabriel y Galán', 'España, Av. Cañada Real', '927 01 77 88', 'Educación'),
(10, 1, 'Instituto Pérez Comendador', 'Av. Virgen del Puerto', '927 01 77 32', 'Educación'),
(11, 1, 'I.E.S. Sierra de Santa Bárbara', 'Calle Aldehuela del Jerte', '927 42 46 26', 'Educación'),
(12, 1, 'Centro Universitario De Plasencia', 'Av. Virgen del Puerto', '927 42 77 00', 'Educación'),
(13, 1, 'U.N.E.D. Plasencia', 'Plaza Sta. Ana', '927 42 05 20', 'Educación'),
(14, 1, 'Hospital Virgen del puerto', 'Paraje Valcorchero', '927 42 83 00', 'Sanidad'),
(15, 1, 'Luis de Toro', 'Calle Luis de Toro', 'CitaPrevia:927 423 436/Urgencias:927 423 380', 'Sanidad'),
(16, 1, 'San Miguel', 'Calle Antonio Vargas y Laguna', 'Urgencias: 927 407 522', 'Sanidad'),
(17, 1, 'La Data', 'Calle Cañada Real', 'CitaPrevia:927 428 421/Urgencias:927 428 420', 'Sanidad'),
(18, 1, 'Salud Mental', 'Avda.de la Salle', '927 458 036', 'Sanidad'),
(19, 1, 'Conductas Adictivas', 'Avda.de la Salle', '927 458 036', 'Sanidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidad`
--

CREATE TABLE `universidad` (
  `COD_UNIVERSIDAD` int(11) NOT NULL,
  `COD_CLASEORG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `universidad`
--

INSERT INTO `universidad` (`COD_UNIVERSIDAD`, `COD_CLASEORG`) VALUES
(1, 5),
(2, 6);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vistagobierno`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vistagobierno` (
`NOMBRE` varchar(50)
,`MINISTERIO` varchar(125)
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vistagobierno`
--
DROP TABLE IF EXISTS `vistagobierno`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vistagobierno`  AS  select `gobierno`.`NOMBRE` AS `NOMBRE`,`gobierno`.`MINISTERIO` AS `MINISTERIO` from `gobierno` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asociacion_vecino`
--
ALTER TABLE `asociacion_vecino`
  ADD PRIMARY KEY (`COD_ASOCIACION`,`COD_BARRIO`),
  ADD UNIQUE KEY `COD_ASOCIACION` (`COD_ASOCIACION`),
  ADD KEY `FK_AVE` (`COD_BARRIO`);

--
-- Indices de la tabla `barrio`
--
ALTER TABLE `barrio`
  ADD PRIMARY KEY (`COD_BARRIO`,`COD_CIUDAD`),
  ADD UNIQUE KEY `COD_BARRIO` (`COD_BARRIO`),
  ADD KEY `FK_BAR` (`COD_CIUDAD`),
  ADD KEY `FK_BARC` (`CENTRO_SALUD`);

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`COD_UNIVERSIDAD`,`COD_DEPARTAMENTO`);

--
-- Indices de la tabla `centro_salud`
--
ALTER TABLE `centro_salud`
  ADD PRIMARY KEY (`COD_CENTROSALUD`,`COD_CLASEORG`),
  ADD UNIQUE KEY `COD_CENTROSALUD` (`COD_CENTROSALUD`),
  ADD KEY `FK_CSA` (`COD_CLASEORG`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`COD_CIUDAD`);

--
-- Indices de la tabla `claseorganismo`
--
ALTER TABLE `claseorganismo`
  ADD PRIMARY KEY (`COD_CLASEORG`,`COD_ORGANISMO`),
  ADD UNIQUE KEY `COD_CLASEORG` (`COD_CLASEORG`),
  ADD KEY `FK_COR` (`COD_ORGANISMO`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`COD_DEPARTAMENTO`,`COD_INSTITUTO`),
  ADD KEY `FK_DEP` (`COD_INSTITUTO`);

--
-- Indices de la tabla `gobierno`
--
ALTER TABLE `gobierno`
  ADD PRIMARY KEY (`COD_GOBERNANTE`,`COD_CIUDAD`),
  ADD UNIQUE KEY `COD_GOBERNANTE` (`COD_GOBERNANTE`),
  ADD KEY `FK_GOB` (`COD_CIUDAD`),
  ADD KEY `FK_ALC` (`ALCALDE`);

--
-- Indices de la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`COD_HOSPITAL`,`COD_CLASEORG`),
  ADD UNIQUE KEY `COD_HOSPITAL` (`COD_HOSPITAL`),
  ADD KEY `FK_HOS` (`COD_CLASEORG`);

--
-- Indices de la tabla `instituto`
--
ALTER TABLE `instituto`
  ADD PRIMARY KEY (`COD_INSTITUTO`,`COD_CLASEORG`),
  ADD UNIQUE KEY `COD_INSTITUTO` (`COD_INSTITUTO`),
  ADD KEY `FK_INS` (`COD_CLASEORG`);

--
-- Indices de la tabla `organismo`
--
ALTER TABLE `organismo`
  ADD PRIMARY KEY (`COD_ORGANISMO`,`COD_CIUDAD`),
  ADD UNIQUE KEY `COD_ORGANISMO` (`COD_ORGANISMO`),
  ADD KEY `FK_ORG` (`COD_CIUDAD`);

--
-- Indices de la tabla `universidad`
--
ALTER TABLE `universidad`
  ADD PRIMARY KEY (`COD_UNIVERSIDAD`,`COD_CLASEORG`),
  ADD UNIQUE KEY `COD_UNIVERSIDAD` (`COD_UNIVERSIDAD`),
  ADD KEY `FK_UNI` (`COD_CLASEORG`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asociacion_vecino`
--
ALTER TABLE `asociacion_vecino`
  ADD CONSTRAINT `FK_AVE` FOREIGN KEY (`COD_BARRIO`) REFERENCES `barrio` (`COD_BARRIO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `barrio`
--
ALTER TABLE `barrio`
  ADD CONSTRAINT `FK_BAR` FOREIGN KEY (`COD_CIUDAD`) REFERENCES `ciudad` (`COD_CIUDAD`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_BARC` FOREIGN KEY (`CENTRO_SALUD`) REFERENCES `centro_salud` (`COD_CENTROSALUD`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD CONSTRAINT `FK_CAR` FOREIGN KEY (`COD_UNIVERSIDAD`) REFERENCES `universidad` (`COD_UNIVERSIDAD`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `centro_salud`
--
ALTER TABLE `centro_salud`
  ADD CONSTRAINT `FK_CSA` FOREIGN KEY (`COD_CLASEORG`) REFERENCES `claseorganismo` (`COD_CLASEORG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `claseorganismo`
--
ALTER TABLE `claseorganismo`
  ADD CONSTRAINT `FK_COR` FOREIGN KEY (`COD_ORGANISMO`) REFERENCES `organismo` (`COD_ORGANISMO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD CONSTRAINT `FK_DEP` FOREIGN KEY (`COD_INSTITUTO`) REFERENCES `instituto` (`COD_INSTITUTO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `gobierno`
--
ALTER TABLE `gobierno`
  ADD CONSTRAINT `FK_ALC` FOREIGN KEY (`ALCALDE`) REFERENCES `gobierno` (`COD_GOBERNANTE`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_GOB` FOREIGN KEY (`COD_CIUDAD`) REFERENCES `ciudad` (`COD_CIUDAD`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `hospital`
--
ALTER TABLE `hospital`
  ADD CONSTRAINT `FK_HOS` FOREIGN KEY (`COD_CLASEORG`) REFERENCES `claseorganismo` (`COD_CLASEORG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `instituto`
--
ALTER TABLE `instituto`
  ADD CONSTRAINT `FK_INS` FOREIGN KEY (`COD_CLASEORG`) REFERENCES `claseorganismo` (`COD_CLASEORG`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `organismo`
--
ALTER TABLE `organismo`
  ADD CONSTRAINT `FK_ORG` FOREIGN KEY (`COD_CIUDAD`) REFERENCES `ciudad` (`COD_CIUDAD`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `universidad`
--
ALTER TABLE `universidad`
  ADD CONSTRAINT `FK_UNI` FOREIGN KEY (`COD_CLASEORG`) REFERENCES `claseorganismo` (`COD_CLASEORG`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
