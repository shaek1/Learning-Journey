<?php
$ok = move_uploaded_file($_FILES['file']['tmp_name'], 'http://localhost/formpic/upload/' . $_FILES['file']['name']);
// This message will be passed to the browser
echo $_FILES['file']['name']; echo $ok ? " uploaded successfully!?" : " upload failed!";
?>