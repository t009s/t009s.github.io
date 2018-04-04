<?php                  
        $url= $_GET['id'];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://casarov-mlin.com/zoom.php?id=$url");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }
        curl_close ($ch);
        echo $result;
?>