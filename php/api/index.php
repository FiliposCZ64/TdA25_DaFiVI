<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $response = [
        "organization" => "Student Cyber Games"
    ];

    echo json_encode($response);