-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 14-01-2019 a les 15:50:45
-- Versió del servidor: 10.1.35-MariaDB
-- Versió de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `multimedia`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `categoria`
--

INSERT INTO `categoria` (`id`, `name`, `description`) VALUES
(1, 'Televisors', 'asda'),
(2, 'Smartphone', 'Android, IOS');

-- --------------------------------------------------------

--
-- Estructura de la taula `contacte`
--

CREATE TABLE `contacte` (
  `name` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `telefon` varchar(15) NOT NULL,
  `subject` text NOT NULL,
  `message` text NOT NULL,
  `viewed` tinyint(1) NOT NULL DEFAULT '0',
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `contacte`
--

INSERT INTO `contacte` (`name`, `email`, `telefon`, `subject`, `message`, `viewed`, `id`) VALUES
('asda', '1231@er.com', '123123', 'Important', '2131 12 sadasdas d2', 1, 1),
('asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de la taula `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de la taula `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `idClient` int(10) UNSIGNED NOT NULL,
  `idProducte` int(11) NOT NULL,
  `idOrder` int(11) NOT NULL,
  `price` varchar(15) NOT NULL,
  `direccio` varchar(90) NOT NULL,
  `codiPostal` int(9) NOT NULL,
  `ciutat` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `orders`
--

INSERT INTO `orders` (`id`, `idClient`, `idProducte`, `idOrder`, `price`, `direccio`, `codiPostal`, `ciutat`) VALUES
(68, 22, 3, 1, '150', 'Mas Monjo 19', 8510, 'Barcelona'),
(69, 22, 8, 1, '114.75', 'Mas Monjo 19', 8510, 'Barcelona'),
(70, 22, 3, 3, '150', 'Mas Monjo 19', 8510, 'Barcelona'),
(71, 22, 8, 3, '114.75', 'Mas Monjo 19', 8510, 'Barcelona'),
(74, 22, 3, 5, '150', 'Mas Monjo 19', 8510, 'Barcelona'),
(75, 22, 8, 5, '114.75', 'Mas Monjo 19', 8510, 'Barcelona'),
(76, 22, 3, 7, '150', 'Mas Monjo 19', 8510, 'Barcelona'),
(77, 22, 7, 7, '257.4', 'Mas Monjo 19', 8510, 'Barcelona'),
(78, 22, 8, 7, '114.75', 'Mas Monjo 19', 8510, 'Barcelona'),
(79, 22, 7, 10, '257.4', 'Mas Monjo 19', 8510, 'Barcelona');

-- --------------------------------------------------------

--
-- Estructura de la taula `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` varchar(10) NOT NULL,
  `discount` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `idSubcategoria` int(10) NOT NULL,
  `stock` int(10) NOT NULL DEFAULT '0',
  `imatge` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `discount`, `idCategory`, `idSubcategoria`, `stock`, `imatge`) VALUES
(3, 'Iphone X', ' <h3><b>Característiques</b></h3>     <div>      <p><!--{{producte.description}} --> Exhibició</p>       <ul>         <li>Diagonal de la pantalla: 127 cm (50 \")</li>         <li>Tipus HD: 4K Ultra HD</li>         <li>3D: No</li>         <li>Resolució de la pantalla: 3840 x 2160 Pixels</li>         <li>Tecnologia de visualització: LED</li>         <li>Forma de la pantalla: Plana</li>       </ul>        <p><!--{{producte.description}} --> Audio</p>       <ul>         <li>Altaveus incorporats: Si</li>         <li>Subwoofer incorporat: Si</li>         <li>Potència RMS de subwoofer: 20 W</li>         <li>Descodificadors: DTS</li>         <li>Sistema d\'àudio: Ultra Surround</li>       </ul>        <p><!--{{producte.description}} --> Pes i dimensions</p>       <ul>         <li>Ample: 1133 mm</li>         <li>Profunditat: 87,9 mm</li>         <li>Alçada: 663 mm</li>         <li>Pes: 10,6 kg</li>         <li>Ample del dispositiu (amb suport): 1133 mm</li>         <li>Profunditat (amb suport): 259 mm</li>         <li>Alçada del dispositiu (amb suport): 722 mm</li>         <li>Pes amb estand: 11,9 kg</li>       </ul>', '150', 0, 2, 4, 0, 'https://images-eu.ssl-images-amazon.com/images/I/51uMWs0mjeL._AC_SS350_.jpg'),
(5, 'Samsung 40\"', 'Samsung 40\" OLED description', '90', 0, 1, 1, 8, 'https://parentesis.com/imagesPosts/samsungultima1.jpg'),
(6, 'Iphone 6', 'TOP Phone 6', '100', 10, 2, 4, 30, 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/p/iphone6s-gld02_3.jpg'),
(7, 'Benq 144Hz', 'Pantalla Benq 144hz', '143', 10, 1, 1, 13, 'https://www.evetech.co.za/repository/ProductImages/benq-xl2411z-monitor-00004.jpg'),
(8, 'Asus 21\"', 'Pantalla Asus 21\"', '135', 15, 1, 1, 0, 'https://www.asus.com/media/global/products/qNIGGLSwiIlojoz2/P_setting_fff_1_90_end_500.png');

-- --------------------------------------------------------

--
-- Estructura de la taula `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'client');

-- --------------------------------------------------------

--
-- Estructura de la taula `subcategoria`
--

CREATE TABLE `subcategoria` (
  `id` int(11) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `subcategoria`
--

INSERT INTO `subcategoria` (`id`, `idCategoria`, `name`, `description`) VALUES
(1, 1, 'OLED', 'Pantalla OLEDaaaa'),
(3, 2, 'Android', 'Android OS'),
(4, 2, 'IOS', 'Apple'),
(9, 1, 'LCD', 'Pantalles lcd'),
(10, 2, 'asss', 'sasda'),
(11, 1, 'asdas', 'asdasd');

-- --------------------------------------------------------

--
-- Estructura de la taula `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` int(11) NOT NULL,
  `pais` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciutat` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccio` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cp` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`, `pais`, `ciutat`, `direccio`, `cp`) VALUES
(3, 'Guillem', 'gvestit@gmail.comx', NULL, '123456789', NULL, '2018-11-14 18:50:41', '2018-11-27 16:55:25', 1, 'WS', 'Barcelona', 'Test 15', 8500),
(16, 'qweq', 'weqwe@wkewe.com', NULL, '$2y$10$CYiBc3.8UU1C1xZJhs8.R.NY2V2rfEZjk1ZQr4pQqYMPqK6n6oqIa', NULL, '2018-11-20 13:23:07', '2018-11-20 13:23:07', 2, NULL, '', '', NULL),
(17, 'asda', 'asda@we.com', NULL, '$2y$10$gWezPGOXbItCT1qD0HGjdO4fcWZFHzMbPWvM6veAvJkhzkT6hUZBC', NULL, '2018-11-20 13:36:33', '2018-11-20 13:36:33', 2, NULL, '', '', NULL),
(18, 'gerwer', 'gveaastit@gmail.com', NULL, '$2y$10$DTP.jhSFj5sW3JJKatie7O9sitSFL/nT8Dpr8.0.Iz5gxXaS6nY12', NULL, '2018-11-20 13:37:08', '2018-11-20 13:37:08', 2, NULL, '', '', NULL),
(19, 'guillem', 'wewe@erke.com', NULL, '$2y$10$dAbH2fcKIcAVyYx4Sbp36.bq3NbbMcYlKc3IAgf5jH2QnFaMoxl0u', NULL, '2018-11-20 13:39:16', '2018-11-20 13:39:16', 2, NULL, '', '', NULL),
(20, 'queremosundiez', 'jose@queremosundiez.com', NULL, '$2y$10$EvKqsyevIN.FkbyHXOxFSOLkSQpu8LBmWuj59QQQimrLvDqRqVacq', NULL, '2018-11-20 15:46:31', '2018-11-20 15:46:31', 1, NULL, '', '', NULL),
(21, 'Guillems', 'gvestit@uvic.cat', NULL, '123456789', NULL, '2018-12-04 15:05:12', '2018-12-04 16:51:20', 1, 'CW', 'Barcelona', 'test 2', 8502),
(22, 'test@test.com', 'test@test.com', NULL, '$2y$10$EVqudj01W/d9NyfYyptd4uOrfSVR6cyEcw.ZANVemLIQWNjg7V0l6', NULL, '2018-12-04 15:17:28', '2019-01-09 15:10:11', 1, 'BB', 'Barcelona', 'Mas Monjo 19', 8510);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `contacte`
--
ALTER TABLE `contacte`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_client` (`idClient`),
  ADD KEY `fk_order_producte` (`idProducte`),
  ADD KEY `fk_order_` (`idOrder`);

--
-- Índexs per a la taula `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_producte_categoria` (`idCategory`),
  ADD KEY `fk_producte_subcategoria` (`idSubcategoria`);

--
-- Índexs per a la taula `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Índexs per a la taula `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category_sub` (`idCategoria`);

--
-- Índexs per a la taula `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_role` (`role`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la taula `contacte`
--
ALTER TABLE `contacte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la taula `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la taula `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT per la taula `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la taula `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la taula `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT per la taula `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_client` FOREIGN KEY (`idClient`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_order_producte` FOREIGN KEY (`idProducte`) REFERENCES `product` (`id`);

--
-- Restriccions per a la taula `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_producte_categoria` FOREIGN KEY (`idCategory`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `fk_producte_subcategoria` FOREIGN KEY (`idSubcategoria`) REFERENCES `subcategoria` (`id`);

--
-- Restriccions per a la taula `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `fk_category_sub` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`);

--
-- Restriccions per a la taula `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`role`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
