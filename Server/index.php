<?php

$files = scandir('files');

$files = array_values(array_diff($files,['.','..']));

echo json_encode($files);