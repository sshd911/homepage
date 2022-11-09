<!DOCTYPE html>
<html lang="en">
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
	<body x-data="{ about: true, archives: false, isMobile: navigator.userAgent.match(/iPhone|Android.+Mobile/) }"
				:class="isMobile ? '' : 'w-4/6'"
				class="bg-zinc-900 mx-auto h-1/2 p-8 -pt-4"
	>
		<?php require_once('./src/components/header.html') ?>
		<canvas id="c1" class="mx-auto"></canvas>
		<script type="text/javascript" src="./src/js/three.js"></script>
		<?php require_once('./src/components/content.html') ?>
	</body>
</html>