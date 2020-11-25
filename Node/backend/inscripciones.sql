-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2020 a las 13:19:06
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inscripciones`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'programación web', 1, 0, '2020-09-29 02:26:39', '2020-09-29 02:26:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursadas`
--

CREATE TABLE `cursadas` (
  `id` int(11) NOT NULL,
  `cursoId` int(11) DEFAULT NULL,
  `modalidadId` int(11) DEFAULT NULL,
  `docenteId` int(11) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `horario` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cursadas`
--

INSERT INTO `cursadas` (`id`, `cursoId`, `modalidadId`, `docenteId`, `fecha_inicio`, `fecha_fin`, `precio`, `horario`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 1, 1, 1, '2020-09-29', '2020-12-20', '20000', '9 a 12', 1, 0, '2020-09-29 02:30:56', '2020-09-29 02:57:34'),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, '2020-09-29 13:42:45', '2020-09-29 13:42:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `idCategoria`, `nombre`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 1, 'Programador web avanzado', 1, 0, '2020-09-29 02:27:15', '2020-09-29 02:27:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `cuit` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`id`, `nombre`, `apellido`, `cuit`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Franco', 'Di Leo', '38151666', 1, 0, '2020-09-29 02:21:53', '2020-09-29 02:21:53'),
(2, NULL, NULL, NULL, 1, 0, '2020-10-20 14:00:40', '2020-10-20 14:00:40'),
(3, 'frantuko', 'di leo', '12931829312', 1, 0, '2020-10-20 14:21:44', '2020-10-20 14:21:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente_imagenes`
--

CREATE TABLE `docente_imagenes` (
  `id` int(11) NOT NULL,
  `idDocente` int(11) NOT NULL,
  `uid` varchar(45) CHARACTER SET utf32 DEFAULT NULL COMMENT 'Uid referencia de imagen',
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `docente_imagenes`
--

INSERT INTO `docente_imagenes` (`id`, `idDocente`, `uid`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 3, '1cd5475f-2654-4260-87f6-a17b681c2bad', 1, 0, '2020-10-20 14:21:44', '2020-10-20 14:21:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidades`
--

CREATE TABLE `modalidades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` datetime DEFAULT current_timestamp(),
  `ts_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `modalidades`
--

INSERT INTO `modalidades` (`id`, `nombre`, `descripcion`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'presencial', 'modalidad presencial', 1, 0, '2020-09-28 23:20:28', '2020-09-28 23:20:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 1,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `apellido`, `mail`, `telefono`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Franquito', 'di leo', 'dileo.francoj@gmail.com', '1144739222', 1, 0, '2020-09-24 13:29:35', '2020-09-24 14:39:02'),
(2, 'Luciano', 'Tontarelli', 'lucianotontarelli@gmail.com', '14141231231', 1, 0, '2020-09-24 14:25:08', '2020-09-24 14:25:08'),
(4, 'fran', 'di', 'dileo.francoj@gmail.com', '1123123123', 1, 0, '2020-10-08 13:23:46', '2020-10-08 13:23:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `confirmacionCorreo` varchar(45) DEFAULT NULL,
  `habilitado` tinyint(4) DEFAULT 0,
  `eliminado` tinyint(4) DEFAULT 0,
  `ts_create` timestamp NULL DEFAULT current_timestamp(),
  `ts_update` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `idPersona`, `usuario`, `password`, `confirmacionCorreo`, `habilitado`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 1, 'francodileo', '1cac789f46a166268402af662dc807ae62aa7f36', 'ab-cd', 1, 0, '2020-10-01 14:15:24', '2020-10-01 14:15:24'),
(2, 4, 'frandi', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', 'd507f2aa-e2be-4fef-abba-8b4f45b7db66', 1, 0, '2020-10-08 13:23:46', '2020-10-08 14:41:07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cursadas`
--
ALTER TABLE `cursadas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cursoId` (`cursoId`),
  ADD KEY `modalidadId` (`modalidadId`),
  ADD KEY `docenteId` (`docenteId`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `docente_imagenes`
--
ALTER TABLE `docente_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDocente` (`idDocente`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPersona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cursadas`
--
ALTER TABLE `cursadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `docentes`
--
ALTER TABLE `docentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `docente_imagenes`
--
ALTER TABLE `docente_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
