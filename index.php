<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>homepage</title>
		<script src="https://cdn.tailwindcss.com"></script>
		<script defer src="https://unpkg.com/alpinejs@3.10.3/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/three@0.139.2/build/three.min.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/controls/OrbitControls.js"></script>
    <script src="https://unpkg.com/three@0.139.2/examples/js/loaders/GLTFLoader.js"></script>
	</head>
	<body class="bg-zinc-900">
		<?php require_once('./src/header.php') ?>
		<script src="js/main.js" ></script>
		<script src="js/three.js" ></script>
		<?php require_once('./src/content.php') ?>
		<?php require_once('./src/footer.php') ?>
		</body>
</html>