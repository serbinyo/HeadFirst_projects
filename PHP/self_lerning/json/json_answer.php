<?php

	// Преобразуем JSON-данные в массив
	$data = json_decode($_POST['json_obj'], true);

	// Объединяем JSON-данные (это уже ассоциативный массив) в строку
	$data = trim(implode(" ", $data));

	$greeting = "Здравствуйте " . $data . "!";
	echo $greeting;