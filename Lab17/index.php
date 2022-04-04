<!DOCTYPE html>
<html>

<head>
    <title>METANIT.COM</title>
    <meta charset="utf-8" />
</head>

<body>
    <?php
    function multiple(int $firstNumber, int $secondNumber)
    {
        return $firstNumber * $secondNumber;
    }

    $func = 'multiple';
    $firstValue = 12;
    $secondValue = 20;

    echo "Имя функции - $func.<br>";
    echo "Результат функции с двумя параметрами $firstValue и $secondValue = {$func($firstValue,$secondValue)}.<br>";
    ?>
</body>

</html>