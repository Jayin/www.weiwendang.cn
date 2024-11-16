<?php

$domain = 'https://www.yifujian.cn';
$urls = array(
    '/',
    '/guide/introduction.html',
    '/faq/',
    '/guide/add-file-in-article.html',
    '/guide/custom-menu-by-fule.html',
    '/guide/func/func-del-file.html',
    '/guide/func/func-direct-link.html',
    '/guide/func/func-file-psw.html',
    '/guide/func/func-mini-code.html',
    '/guide/func/func-mini-path.html',
    '/guide/func/func-replace-file.html',
    '/guide/introduction.html',
    '/guide/quick-start.html',
    '/guide/reply-file-by-keyword.html',
    '/guide/upload-on-mini.html',
    '/guide/upload-on-pc.html',
    // 'https://www.yifujian.cn/upload-file.html',
);
$urls = array_map(function ($url) use ($domain) {
    return $domain . $url;
}, $urls);
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
