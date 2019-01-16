<?php

function greeting($hour){

    $greeting_message = "";

    if($hour > 6 && $hour <= 11) {
        $greeting_message = "Good Morning";
    }
    else if($hour > 11 && $hour <= 16) {
        $greeting_message = "Good Afternoon";
    }
    else if($hour > 16 && $hour <= 23) {
        $greeting_message = "Good Evening";
    }

    return $greeting_message;
}

?>