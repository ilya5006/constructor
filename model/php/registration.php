<?php
    require_once './classes/Database.php';

    $login = $_REQUEST['login'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];

    $loginDB = Database::query("SELECT `login` FROM `users` WHERE `login` = '$login'")['login'];

    if ($loginDB)
    {
        die ('Пользователь с таким логином уже зарегестрирован');
    }

    $emailDB = Database::query("SELECT `email` FROM `users` WHERE `email` = '$email'")['email'];

    if ($emailDB)
    {
        die ('Пользователь с такой электронной почтой уже зарегестрирован');
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $registerUser = Database::queryExecute("INSERT INTO `users` VALUES (NULL, '$login', '$passwordHash', '$email')");
    
    if ($registerUser)
    {
        die ('Вы успешно зарегистрировались');
    }
    else
    {
        die ('Что-то пошло не так, попробуйте ещё раз');
    }

?>