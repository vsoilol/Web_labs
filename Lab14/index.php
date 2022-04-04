<!DOCTYPE html>
<html>
<head>
<title>METANIT.COM</title>
<meta charset="utf-8" />
</head>
<body>
 
<?php
    $array = [2, 5, 4, 3, 1];

    foreach($array as $element)
    {
        echo "$element ";
    }

    $newArray = [];

    $count = count($array);
    echo "<br>", $count;
    for ($i = 0; $i < $count; $i++) {
        $value = $array[$i];
        while ($array[$i] > 0) {
            array_push($newArray, $value);
            $array[$i]--;
        }
    }

    echo "<br>";
    foreach($newArray as $element)
    {
        echo "$element ";
    }
?>
 
</body>
</html>