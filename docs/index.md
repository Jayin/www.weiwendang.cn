---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 微文档 - 公众号文档分享专家
titleTemplate: 微文档官网 - 专业的公众号文档解决方案
head:
    - - meta
      - name: description
        content: 微文档是专业的微信公众号文档分享平台，支持多格式文档在线预览，提供安全可靠的文档托管服务，让知识分享更便捷
      - name: keywords
        content: 微文档,微文档官网,微信公众号文档,在线预览公众号文档


hero:
  name: "微文档"
  text: "让文档分享更简单"
  tagline: 专业的文档托管与分享平台，已服务100万+用户
  image:
    src: /logo.png
    alt: 微文档
  actions:
    - theme: brand
      text: 免费开始使用
      link: https://app.weiwendang.cn?utm_source=docs
      rel: noopener
    - theme: alt
      text: 使用教程
      link: /guide/quick-start

features:
  - icon: 📚
    title: 专业文档管理
    details: 支持50+文档格式，AI智能识别，在线预览体验更流畅
  - icon: 🔒
    title: 企业级安全防护
    details: 银行级AES-256加密，腾讯云全球CDN加速，99.9%可用性保证
  - icon: 🚀
    title: 3分钟快速集成
    details: 无需技术基础，复制粘贴即可完成，支持批量操作和API集成
  - icon: 📊
    title: 数据统计分析
    details: 实时访问统计，用户行为分析，助力内容运营决策优化
  - icon: 🌐
    title: 全平台兼容
    details: 完美适配微信公众号、小程序、网页端，一站式文档分享解决方案
  - icon: 💎
    title: 专业服务保障
    details: 7×24小时技术支持，专属客服团队，为企业用户提供定制化服务
---

<style>
/* 使用 !important 和更具体的选择器来提高优先级 */
.VPContent .full-width-section {
  width: 100vw !important;
  position: relative !important;
  left: 50% !important;
  right: 50% !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  overflow-x: hidden !important;
}

.VPContent .stats-section {
  background: linear-gradient(135deg, #07C160 0%, #06AD56 100%) !important;
  color: white !important;
  padding: 60px 0 !important;
  margin-top: 80px;
}

.VPContent .stats-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  text-align: center !important;
  padding: 0 20px !important;
}

.VPContent .stats-title {
  font-size: 2.5rem !important;
  margin-bottom: 50px !important;
  font-weight: 600 !important;
  color: white !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.2 !important;
}

.VPContent .stats-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  gap: 40px !important;
}

.VPContent .stat-item {
  text-align: center !important;
}

.VPContent .stat-number {
  font-size: 3rem !important;
  font-weight: bold !important;
  margin-bottom: 10px !important;
  color: white !important;
  line-height: 1 !important;
}

.VPContent .stat-label {
  font-size: 1.2rem !important;
  opacity: 0.9 !important;
  color: white !important;
}

.VPContent .industry-section {
  padding: 80px 0 !important;
  background-color: #f8f9fa !important;
}

.VPContent .industry-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  text-align: center !important;
  padding: 0 20px !important;
}

.VPContent .industry-title {
  font-size: 2.5rem !important;
  margin-bottom: 30px !important;
  color: #2c3e50 !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.2 !important;
  font-weight: 600 !important;
}

.VPContent .industry-subtitle {
  font-size: 1.2rem !important;
  color: #666 !important;
  margin-bottom: 50px !important;
}

.VPContent .industry-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
  gap: 30px !important;
  margin-top: 40px !important;
}

.VPContent .industry-card {
  background: white !important;
  padding: 30px !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.VPContent .industry-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 8px 25px rgba(7, 193, 96, 0.2) !important;
}

.VPContent .industry-card h3 {
  color: #07C160 !important;
  margin-bottom: 15px !important;
  font-size: 1.3rem !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
}

.VPContent .industry-card p {
  color: #666 !important;
  margin: 0 !important;
  line-height: 1.6 !important;
}

.VPContent .advantage-section {
  padding: 80px 0 !important;
}

.VPContent .advantage-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 0 20px !important;
}

.VPContent .advantage-title {
  font-size: 2.5rem !important;
  text-align: center !important;
  margin-bottom: 60px !important;
  color: #2c3e50 !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.2 !important;
  font-weight: 600 !important;
}

.VPContent .advantage-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
  gap: 50px !important;
}

.VPContent .advantage-item h3 {
  color: #07C160 !important;
  font-size: 1.5rem !important;
  margin-bottom: 20px !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
}

.VPContent .advantage-item ul {
  color: #666 !important;
  line-height: 1.8 !important;
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.VPContent .advantage-item li {
  padding: 8px 0 !important;
  position: relative !important;
  padding-left: 20px !important;
  color: #666 !important;
  line-height: 1.8 !important;
}

.VPContent .advantage-item li:before {
  content: "✓" !important;
  color: #07C160 !important;
  font-weight: bold !important;
  position: absolute !important;
  left: 0 !important;
}

.VPContent .case-section {
  background-color: #f8f9fa !important;
  padding: 80px 0 !important;
}

.VPContent .case-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  text-align: center !important;
  padding: 0 20px !important;
}

.VPContent .case-title {
  font-size: 2.5rem !important;
  margin-bottom: 60px !important;
  color: #2c3e50 !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.2 !important;
  font-weight: 600 !important;
}

.VPContent .case-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  gap: 30px !important;
}

.VPContent .case-card {
  background: white !important;
  padding: 40px !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.VPContent .case-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 8px 25px rgba(7, 193, 96, 0.2) !important;
}

.VPContent .case-card h4 {
  color: #2c3e50 !important;
  margin-bottom: 20px !important;
  font-size: 1.3rem !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
}

.VPContent .case-card p {
  color: #666 !important;
  margin-bottom: 20px !important;
  line-height: 1.6 !important;
}

.VPContent .case-author {
  color: #07C160 !important;
  font-weight: bold !important;
}

.VPContent .cta-section {
  background: linear-gradient(135deg, #07C160 0%, #06AD56 100%) !important;
  color: white !important;
  padding: 80px 0 !important;
}

.VPContent .cta-container {
  max-width: 800px !important;
  margin: 0 auto !important;
  text-align: center !important;
  padding: 0 20px !important;
}

.VPContent .cta-title {
  font-size: 2.5rem !important;
  margin-bottom: 30px !important;
  color: white !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.2 !important;
  font-weight: 600 !important;
}

.VPContent .cta-subtitle {
  font-size: 1.3rem !important;
  margin-bottom: 40px !important;
  opacity: 0.9 !important;
  color: white !important;
}

.VPContent .cta-buttons {
  display: flex !important;
  gap: 20px !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
}

.VPContent .cta-primary {
  background: white !important;
  color: #07C160 !important;
  padding: 15px 30px !important;
  border-radius: 50px !important;
  text-decoration: none !important;
  font-weight: bold !important;
  font-size: 1.1rem !important;
  display: inline-block !important;
  transition: all 0.3s ease !important;
}

.VPContent .cta-primary:hover {
  background: #f0f0f0 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
}

.VPContent .cta-secondary {
  border: 2px solid white !important;
  background: transparent !important;
  color: white !important;
  padding: 15px 30px !important;
  border-radius: 50px !important;
  text-decoration: none !important;
  font-weight: bold !important;
  font-size: 1.1rem !important;
  display: inline-block !important;
  transition: all 0.3s ease !important;
}

.VPContent .cta-secondary:hover {
  background: white !important;
  color: #07C160 !important;
}

.VPContent .cta-note {
  margin-top: 30px !important;
  opacity: 0.8 !important;
  font-size: 0.9rem !important;
  color: white !important;
}

.VPContent .partner-section {
  padding: 80px 0 !important;
  background-color: #f8f9fa !important;
}

.VPContent .partner-container {
  max-width: 1200px !important;
  margin: 0 auto !important;
  text-align: center !important;
  padding: 0 20px !important;
}

.VPContent .partner-title {
  color: #666 !important;
  margin-bottom: 40px !important;
  font-size: 1.2rem !important;
  border: none !important;
  padding-top: 0 !important;
  letter-spacing: normal !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
}

.VPContent .partner-logos {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 60px !important;
  flex-wrap: wrap !important;
  opacity: 0.6 !important;
}

.VPContent .partner-logo {
  font-size: 1.5rem !important;
  font-weight: bold !important;
  color: #666 !important;
  transition: opacity 0.3s ease !important;
}

.VPContent .partner-logo:hover {
  opacity: 1 !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .VPContent .stats-title, 
  .VPContent .industry-title, 
  .VPContent .advantage-title, 
  .VPContent .case-title, 
  .VPContent .cta-title {
    font-size: 2rem !important;
  }
  
  .VPContent .stat-number {
    font-size: 2.5rem !important;
  }
  
  .VPContent .stats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 30px !important;
  }
  
  .VPContent .industry-grid, 
  .VPContent .case-grid {
    grid-template-columns: 1fr !important;
  }
  
  .VPContent .advantage-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  
  .VPContent .cta-buttons {
    flex-direction: column !important;
    align-items: center !important;
  }
  
  .VPContent .partner-logos {
    gap: 30px !important;
  }
}

@media (max-width: 480px) {
  .VPContent .stats-title, 
  .VPContent .industry-title, 
  .VPContent .advantage-title, 
  .VPContent .case-title, 
  .VPContent .cta-title {
    font-size: 1.8rem !important;
  }
  
  .VPContent .stat-number {
    font-size: 2rem !important;
  }
  
  .VPContent .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 25px !important;
  }
}
</style>

<!-- 权威数据展示 - 全屏宽度 -->
<div class="full-width-section stats-section">
  <div class="stats-container">
    <h2 class="stats-title">值得信赖的数据表现</h2>
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">100万+</div>
        <div class="stat-label">注册用户</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">5000万+</div>
        <div class="stat-label">文档访问次数</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">99.9%</div>
        <div class="stat-label">服务可用性</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">文档格式支持</div>
      </div>
    </div>
  </div>
</div>

<!-- 行业认可 - 全屏宽度 -->
<div class="full-width-section industry-section">
  <div class="industry-container">
    <h2 class="industry-title">行业领先企业的信赖之选</h2>
    <p class="industry-subtitle">全国知名企业和机构都在使用微文档提升文档分享效率</p>
    <div class="industry-grid">
      <div class="industry-card">
        <h3>🏫 教育培训</h3>
        <p>新东方等知名教育机构</p>
      </div>
      <div class="industry-card">
        <h3>🏢 企业培训</h3>
        <p>中国银行等世界500强企业</p>
      </div>
      <div class="industry-card">
        <h3>🏛️ 事业单位</h3>
        <p>地方人才集团等事业单位</p>
      </div>
      <div class="industry-card">
        <h3>🏥 医疗健康</h3>
        <p>重庆妇幼等三甲医院</p>
      </div>
    </div>
  </div>
</div>

<!-- 核心优势详解 -->
<div class="advantage-section">
  <div class="advantage-container">
    <h2 class="advantage-title">为什么选择微文档？</h2>
    <div class="advantage-grid">
      <div class="advantage-item">
        <h3>🔒 银行级安全保障</h3>
        <ul>
          <li>AES-256端到端加密技术</li>
          <li>多重备份与容灾机制</li>
          <li>完善的权限管理体系</li>
        </ul>
      </div>
      <div class="advantage-item">
        <h3>⚡ 极致性能体验</h3>
        <ul>
          <li>全球200+CDN节点加速</li>
          <li>平均响应时间＜100ms</li>
          <li>支持10万+并发访问</li>
        </ul>
      </div>
      <div class="advantage-item">
        <h3>🤖 AI智能助手</h3>
        <ul>
          <li>智能文档格式识别</li>
          <li>自动内容摘要生成</li>
          <li>OCR文字提取技术</li>
        </ul>
      </div>
      <div class="advantage-item">
        <h3>📈 专业数据分析</h3>
        <ul>
          <li>实时访问数据统计</li>
          <li>用户行为路径分析</li>
          <li>内容效果评估报告</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- 客户成功案例 - 全屏宽度 -->
<div class="full-width-section case-section">
  <div class="case-container">
    <h2 class="case-title">客户成功案例</h2>
    <div class="case-grid">
      <div class="case-card">
        <h4>某地方人才网</h4>
        <p>"使用微文档后，我们的招聘文档分发效率提升，满意度显著提高。"</p>
        <div class="case-author">— 培训总监 张女士</div>
      </div>
      <div class="case-card">
        <h4>世界500强企业</h4>
        <p>"微文档帮助我们建立了标准化的员工培训体系，大大降低了管理成本。"</p>
        <div class="case-author">— 人力资源总监 李先生</div>
      </div>
      <div class="case-card">
        <h4>某事业单位</h4>
        <p>"微文档的安全性和稳定性完全满足我们的需求，公文分发更加高效便民。"</p>
        <div class="case-author">— 信息中心主任 王先生</div>
      </div>
    </div>
  </div>
</div>

<!-- 立即开始 - 全屏宽度 -->
<div class="full-width-section cta-section">
  <div class="cta-container">
    <h2 class="cta-title">立即开始您的文档分享之旅</h2>
    <p class="cta-subtitle">加入100万+用户的信赖选择，体验专业的文档管理服务</p>
    <div class="cta-buttons">
      <a href="https://app.weiwendang.cn?utm_source=docs" class="cta-primary" rel="noopener">免费开始使用</a>
      <a href="/guide/quick-start" class="cta-secondary">查看使用教程</a>
    </div>
  </div>
</div>

<!-- 合作伙伴 - 全屏宽度 -->
<div class="full-width-section partner-section">
  <div class="partner-container">
    <h3 class="partner-title">技术合作伙伴</h3>
    <div class="partner-logos">
      <div class="partner-logo">腾讯云</div>
      <div class="partner-logo">七牛云</div>
      <div class="partner-logo">微信开放平台</div>
      <div class="partner-logo">微信服务商</div>
      <div class="partner-logo">DeepSeek</div>
    </div>
  </div>
</div>