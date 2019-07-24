<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
    function alterString(str) {
    return str.substr(str.length - 1) + str.substr(0, str.length - 1);
}

function rotateString(str) {
    window.setInterval(function() {alterString(str)}, 300);
}
    </script>

    </script>
</body>
</html>
