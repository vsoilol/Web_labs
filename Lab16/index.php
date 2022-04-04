<!DOCTYPE html>
<html>

<head>
    <title>METANIT.COM</title>
    <meta charset="utf-8" />
</head>

<body>
    <?php

    $month = rand(1, 12);

    setlocale(LC_ALL, 'ru-RU.UTF-8');
    $monthName = strftime('%B', mktime(0, 0, 0, $month));

    echo "Номер месяца - $month. Название месяца - $monthName";
    ?>
</body>

</html>