<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="format-detection" content="telephone=no">
		<link rel="icon" href="./img/sshd.png">
		<title>homepage</title>
		<script defer src="https://unpkg.com/alpinejs@3.10.3/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/three@0.139.2/build/three.min.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/controls/OrbitControls.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/loaders/GLTFLoader.js"></script>
		<link href="/dist/output.css" rel="stylesheet">
	</head>
	<body class="bg-zinc-900 container mx-auto items-center md:w-1/2 h-1/2 pt-4 pl-8 pr-8 pb-8" x-data="{ about: true, archives: false, credit: false}">
		<?php require_once('./src/header.php') ?>
		<script src="js/three.js"></script>
		<?php require_once('./src/content.php') ?>
		</body>
</html>