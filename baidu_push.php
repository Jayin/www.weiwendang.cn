<?php
$urls = array(
    'https://www.yifujian.cn/',
    'https://yifujian.cn/guide/introduction.html',
);
$api = 'http://data.zz.baidu.com/urls?site=https://www.yifujian.cn&token=4NtpfnBnvHTKNq1k';
$ch = curl_init();
$options =  array(
    CURLOPT_URL => $api,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => implode("\n", $urls),
    CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
);
curl_setopt_array($ch, $options);
$result = curl_exec($ch);
echo $result;