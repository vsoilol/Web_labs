<!DOCTYPE html>
<html>
<head>
<title>METANIT.COM</title>
<meta charset="utf-8" />
</head>
<body>
 
<?php
    $singleQuotesText = 'Text with single quotes';
    $singleDoubleText = "Text with double quotes\n";

    $str = <<<END
            Пример строки,
            охватывающей несколько строк,
            с использованием heredoc-синтаксиса.
            Здесь не нужно экранировать ни одинарные ', ни двойные " кавычки.
            END;

    echo "$singleQuotesText<br> $singleDoubleText<br> $str<br><br>";
    	
    $numbers = [1, 2, 3, 4];

    $num = count($numbers);
    echo "Вывод с помощью echo: ";
    foreach($numbers as $element)
    {
        echo "$element ";
    }

    echo "<br />";

    print "Вывод с помощью print: ";
    foreach($numbers as $element)
    {
        print "$element ";
    }

    echo "<br />";

    print "Вывод с помощью print_r: ";
    print_r($numbers);

    echo "<br />";

    echo "Вывод с помощью serialize: ", serialize($numbers);

    print "<br><br>Функция rtrim";
    $strWithWhiteSpacesInTheEnd = "Строка с пробелами и точками в конце...                  ";

    echo "<br>";
    var_dump($strWithWhiteSpacesInTheEnd);

    echo "<br>";
    $trimmed = rtrim($strWithWhiteSpacesInTheEnd, " .");
    var_dump($trimmed);


    echo "<br><br>Функция strpbrk";
    $text = 'This is a Simple text.';

    echo "<br>", $text;
    echo "<br>", strpbrk($text, 'mi'), " - указанные символы 'mi'";
    echo "<br>", strpbrk($text, 'S'), " - указанные символы 'S'";

    echo "<br><br>Функция strspn";
    $text = "42 - ответ на 128 вопрос.";
    $mask = "1234567890";
    $var = strspn($text, $mask);

    echo "<br>";
    echo "Текст - \"$text\", Маска - \"$mask\", Результат работы функции - $var"; 

    echo "<br><br>Функция trim";
    $text = "  ...   Some string...    ";

    echo "<br>";
    var_dump($text);

    echo "<br>";
    $trimmed = trim($text, " .");
    var_dump($trimmed);
?>
 
</body>
</html>