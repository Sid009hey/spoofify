<?php

$json_file = "songs.json";

// Load existing song data from JSON file
$songs = json_decode(file_get_contents($json_file), true);

// Add new song to array
$new_song = [
  "title" => $_POST["title"],
  "album" => $_POST["album"],
  "link" => $_POST["link"],
];
$songs[] = $new_song;

// Write updated song data back to JSON file
file_put_contents($json_file, json_encode(["songs" => $songs]));

// Return success response
header("Content-Type: application/json");
echo json_encode(["success" => true]);

?>
