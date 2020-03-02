<?php
    $login = $_REQUEST['login'];
    $password = $_REQUEST['password'];

    $userInfo = Database::query("SELECT `id_user`, `password` FROM `users` WHERE `login` = '$login'");

    if ( ! $userInfo )
    {
        die ('Такого пользователя не существует');
    }

    if (password_verify($password, $userInfo['password']))
    {
        $_SESSION['id_user'] = $userInfo['id_user'];
    }
    else
    {
        die ('Вы ввели неверный пароль');
    }
?>