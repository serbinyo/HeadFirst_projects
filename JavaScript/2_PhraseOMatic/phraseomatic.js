function phraseGenerator()
{
	var phrases1 = ["круглосуточный,", "трех-звенный,", "30000-метровый,",
            "взаимный,", "обоюдный выигрыш,", "фронтэнд,", "на основе веб-технологий,",
            "проникающий,", "умный,", "шесть сигм,", "метод критического пути,", "динамичный,",
            "основопологающий,", "свежепахнущий,", "крутецкий,"];
	var phrases2 = ["уполномоченный", "трудный", "чистый продукт", 
            "с дырочками", "ориентированный", "центральный", "деньгидобывающий", 
            "распределенный", "кластеризованный", "фирменный", "нелиняющий", 
            "нестандартный ум", "позицианированный", "сетевой", "бархатный",
            "сфокусированный", "использованный с выгодой", "выровненный", 
            "нацеленный на", "общий", "дикий", "свой", "ускоренный", "совместный"];
	var phrases3 = ["процесс", "пункт прыбыли", "пункт разгрузки", "порт", 
            "выход из положения", "талант", "тип структуры", "юмор", "проход", "подход", 
            "уровень завоеванного внимания", "энтузиазм", "фарт", "портал", "период времени",
            "обзор", "образец", "пункт следования", "подарок"];

	var index1 = Math.floor(Math.random() * phrases1.length);
	var index2 = Math.floor(Math.random() * phrases2.length);
	var index3 = Math.floor(Math.random() * phrases3.length);

	return phrases1[index1] + " " + phrases2[index2] + " " + phrases3[index3];
}

	var message = phraseGenerator();
	alert(message);



