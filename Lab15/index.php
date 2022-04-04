<!DOCTYPE html>
<html>

<head>
    <title>METANIT.COM</title>
    <meta charset="utf-8" />
</head>

<body>

    <?php
    echo "<h2>Матрицу заполненная по спирали против часовой стрелки</h2>";

    $array = createСounterСlockwiseMatrix(8);

    $rows = count($array);

    echo "<table>";
    for ($row = 0; $row < $rows; $row++) {


        $columns = count($array[$row]);

        for ($col = 0; $col < $columns; $col++) {
            echo "<td>";
            echo "&nbsp;";
            echo $array[$row][$col];
            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    function createСounterСlockwiseMatrix($size)
    {
        $array = array();
        $array[] = array();

        $startLeft = false;
        $startTop = false;
        $rowTop = 0;
        $rowBottom = $size - 1;
        $columnLeft = 0;
        $columnRight = $size - 1;

        $index = 0;
        while ($index < $size * $size) {
            if ($startLeft) {
                if ($startTop) {
                    for ($row = $rowTop; $row <= $rowBottom; $row++) {
                        $index++;
                        $array[$row][$columnLeft] = $index;
                    }
                    $columnLeft++;
                    $startLeft = false;
                } else {
                    for ($column = $columnRight; $column >= $columnLeft; $column--) {
                        $index++;
                        $array[$rowTop][$column] = $index;
                    }
                    $rowTop++;
                    $startTop = true;
                }
            } else {
                if ($startTop) {
                    for ($column = $columnLeft; $column <= $columnRight; $column++) {
                        $index++;
                        $array[$rowBottom][$column] = $index;
                    }
                    $rowBottom--;
                    $startTop = false;
                } else {
                    for ($row = $rowBottom; $row >= $rowTop; $row--) {
                        $index++;
                        $array[$row][$columnRight] = $index;
                    }
                    $columnRight--;
                    $startLeft = true;
                }
            }
        }

        return $array;
    }
    ?>

</body>

</html>