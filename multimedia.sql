-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 16-11-2018 a les 19:01:48
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
(1, 'Televisors', 'asd'),
(2, 'Smartphone', 'Android, IOS');

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
  `price` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de la taula `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `discount` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `idSubcategoria` int(10) NOT NULL,
  `stock` int(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `discount`, `idCategory`, `idSubcategoria`, `stock`) VALUES
(3, 'Iphone X', 'TOP Phone', '150', 0, 2, 4, 50),
(5, 'Samsung 40\"', 'Samsung 40\" OLED description', '90', 0, 1, 1, 8),
(6, 'Iphone 6', 'TOP Phone 6', '100', 10, 2, 4, 30),
(7, 'Benq 144Hz', 'Pantalla Benq 144hz', '143', 10, 1, 1, 15),
(8, 'Asus 21\"', 'Pantalla Asus 21\"', '135', 15, 1, 1, 5);

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
(1, 1, 'OLED', 'Pantalla OLED'),
(3, 2, 'Android', 'Android OS'),
(4, 2, 'IOS', 'Apple'),
(9, 1, 'LCD', 'Pantalles lcd');

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
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(3, 'Guillem', 'gvestit@gmail.com', NULL, '$2y$10$RJAWEZlhSimBCcSx5Is.muw6KTmgACQOCvRoPnJ8L8EcsU07jZt26', NULL, '2018-11-14 18:50:41', '2018-11-14 18:50:41', 1),
(4, 'Guillem', 'gevestit@gmail.com', NULL, '$2y$10$xFYLhuhiu.MFu0hz8HbsmOMSww98.ei0cvnrLuUMNTXWIRobYY6/2', NULL, '2018-11-14 18:51:31', '2018-11-14 18:51:31', 1),
(8, 'Guillem', 'gvexastit@gmail.com', NULL, '$2y$10$P.akTGLwl4CpataR/E0Gm.FlyTGfr6fktk1Ejhxc.oOo8abJOpk7S', NULL, '2018-11-14 19:27:59', '2018-11-14 19:27:59', 2),
(9, 'Guillem', 'gvexastita@gmail.com', NULL, '$2y$10$MlLAgqerpEkGrZlPgxVGUOSoCWVIAfDpnh7EMJloo0tdW8F2gldMG', NULL, '2018-11-14 19:29:01', '2018-11-14 19:29:01', 2),
(10, 'gerwawe', 'gvwaestit@gmail.com', NULL, '$2y$10$.9x3vOvCvPmbAr294cb21eKceL2u0ym1NPGdopXA28p4Riakh3Dje', NULL, '2018-11-14 19:29:55', '2018-11-14 19:29:55', 2),
(11, 'gerard', 'gerard@gmail.com', NULL, '$2y$10$NQY/viqsOeyDwLBrBHyWZOhrsrlX/IAkdoPPYBwlPdxNyp1u0vWSG', NULL, '2018-11-15 13:05:38', '2018-11-15 13:05:38', 2),
(12, 'asdqwe', 'wewewqe@welwe.com', NULL, '$2y$10$TlE8Vob3tq1iN4TTPW6cRuWe9EMUP48VK3HoNDlIz5wJQgmXO207.', NULL, '2018-11-15 13:14:48', '2018-11-15 13:14:48', 2),
(13, '12345', 'gvesttit@gmail.com', NULL, '$2y$10$ePY50IoHLgMaOwihjom5I.0cW2Vm7dTN0GaLvMap3u.zn565Ky4c2', NULL, '2018-11-15 13:20:49', '2018-11-15 13:20:49', 2),
(14, '12345a', 'gvestttit@gmail.com', NULL, '$2y$10$ok5qlXq9CfdyB5LwEs.foeqRUDQ5HmqGv0QOnmpmXNEEKeXRfgl5q', NULL, '2018-11-15 13:21:15', '2018-11-15 13:21:15', 2);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `categoria`
--
ALTER TABLE `categoria`
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
-- AUTO_INCREMENT per la taula `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la taula `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la taula `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`id`),
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
