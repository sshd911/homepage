<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="format-detection" content="telephone=no">
		<link rel="icon" href="./img/sshd.png">
		<title>homepage</title>
    <script src="https://unpkg.com/three@0.139.2/build/three.min.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/controls/OrbitControls.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/loaders/GLTFLoader.js"></script>
	</head>
	<body x-data="{ about: true, archives: false, isMobile: navigator.userAgent.match(/iPhone|Android.+Mobile/) }"
				:class="isMobile ? '' : 'w-4/6'"
				class="mx-auto h-1/2 p-8 -pt-4 bg-fixed bg-cover overflow-auto"
				style="background-image: url('./img/bg.webp');height: 100vh; "
	>
		<?php require_once('./src/components/header.html') ?>
		<canvas id="c1" class="mx-auto"></canvas>
		<script type="text/javascript" src="./src/js/three.js"></script>
		<?php require_once('./src/components/content.html') ?>

		<link href="/dist/output.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="./src/style/button.css">
		<link rel="stylesheet" type="text/css" href="./src/style/type.css">
		<script defer src="https://unpkg.com/alpinejs@3.10.3/dist/cdn.min.js"></script>
		<script defer src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
		<script defer src="./src/js/type.js"></script>
	</body>
</html>