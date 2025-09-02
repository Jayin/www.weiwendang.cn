# 从电脑端（PC）上传附件

电脑端上传建议使用网页上传。网址：<a :href="theme.customData.upload_url">{{ theme.customData.upload_url }}</a>

![image.png](./images/add-file-in-article-1.png)


## 常见问题

### 支持哪种文件？

后缀符合以下格式的文件均可上传：pdf,doc,docx,xls,xlsx,ppt,pptx,rar,zip 



<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>