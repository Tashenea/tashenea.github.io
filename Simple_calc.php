<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
</head>
<body>
    <h2>Result:</h2>
    <?php
    if (isset($_POST['submit'])) {
        $num1 = $_POST['num1'];
        $operator = $_POST['operator'];

        switch ($operator) {
            case '+':
                $result = $num1 + $num2;
                break;
            case '-':
                $result = $num1 - $num2;
                break;
            case '*':
                $result = $num1 * $num2;
                break;
            case '/':
                if ($num2 == 0) {
                    $result = "Cannot divide by zero";
                } else {
                    $result = $num1 / $num2;
                }
                break;
            default:
                $result = "Invalid operator";
        }
        echo "Result: " . $result;
    }
    ?>
</body>
</html>