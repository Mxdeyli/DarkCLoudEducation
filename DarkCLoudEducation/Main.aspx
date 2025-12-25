<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="DarkCLoudEducation.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>首页</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <script type="text/javascript"src="js/PageData.js"></script>
    <script type="text/javascript" src="js/cardshow.js"></script>
</head>
<body>
    <div class="main-page" id="mainPage">
        <nav class="navbar">
            <div class="navbar-content">
                <div class="nav-logo">
                    <img src="images/logo (1).png" alt="logo" />
                    <br />
                    <span class="nav-title">暗云安全</span>
                </div>
                <div class="nav-menu">
                    <a href="Guest.aspx" class="nav-item">首页</a>
                    <a href="#" class="nav-item">课程</a>
                    <a href="#" class="nav-item">工具</a>
                    <a href="#" class="nav-item">社区</a>
                    <a href="#" class="nav-item">讨论</a>
                    <span class="nav-item" onclick="window.close();">退出</span>
                </div>
            </div>
        </nav>
        <div class="announcement-bar" id="announcementBar">
            <div class="announcement-header">
                <span class="announcement-title">📢 重要公告（核心基础）</span>
                <button class="collapse-btn">▼</button>
            </div>
            <div class="announcement-content">
                <div class="announcement-item">
                    极速教程：《极客自然简洁》
                </div>
                <div class="announcement-item">
                    群内课程：《群内直播课程》
                </div>
                <div class="announcement-item">
                    群内课程：《二进制安全》
                </div>
                <div class="announcement-item">
                    群内课程：《网络安全全流程》
                </div>
                <div class="announcement-item">
                    群内课程：《WEB3区块链基础币》
                </div>
                <div class="announcement-item">
                    闭源福利：《一对一辅导》
                </div>
                <div class="announcement-item">
                    闭源金牌：《项目陪同赛》
                </div>
            </div>
        </div>

        <div id="homeContent">
            <div class="hero-section">
                <div class="hero-logo">
                    <img src="images/logo.png" alt="logo" />
                </div>
                <h1 class="hero-title">暗云安全</h1>
                <p class="hero-subtitle">懂进攻，知防守，先正向，后逆向</p>
                <div class="hero-buttons">
                    <a href="#" class="hero-btn">付费课程</a>
                    <a href="#" class="hero-btn">加群提问资源</a>
                    <a href="#" class="hero-btn">攻防平台</a>
                </div>
            </div>
            <div class="cards-section">
                <h2 class="section-title">🎯 知识体系</h2>
                <div class="cards-grid">
                    <div class="knowledge-card" onclick="showCategory('security')">
                        <div class="card-icon">🛡️</div>
                        <div class="card-title">安全全貌</div>
                        <div class="card-subtitle">网络安全整体技术体系</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('mitre')">
                        <div class="card-icon">⚔️</div>
                        <div class="card-title">MITRE ATT&CK</div>
                        <div class="card-subtitle">APT、真实攻击技术</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('teaching')">
                        <div class="card-icon">🎓</div>
                        <div class="card-title">平台教学</div>
                        <div class="card-subtitle">学习平台、实验平台教学</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('vlog')">
                        <div class="card-icon">🎬</div>
                        <div class="card-title">VLOG</div>
                        <div class="card-subtitle">学习方法、学习思路</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('web')">
                        <div class="card-icon">🌐</div>
                        <div class="card-title">WEB安全</div>
                        <div class="card-subtitle">Web漏洞、渗透测试</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('pentest')">
                        <div class="card-icon">🔍</div>
                        <div class="card-title">渗透安全</div>
                        <div class="card-subtitle">安全实例术、编中点</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('dev')">
                        <div class="card-icon">💻</div>
                        <div class="card-title">正向开发</div>
                        <div class="card-subtitle">正向开发也会成为客观程序面</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('reverse')">
                        <div class="card-icon">🔄</div>
                        <div class="card-title">逆向分析</div>
                        <div class="card-subtitle">逆向分析概况、实例</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('ai')">
                        <div class="card-icon">🤖</div>
                        <div class="card-title">AI安全</div>
                        <div class="card-subtitle">AI安全实例、机器学习、深度学习</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('binary')">
                        <div class="card-icon">🎯</div>
                        <div class="card-title">抵制八股</div>
                        <div class="card-subtitle">抵制八股</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('live')">
                        <div class="card-icon">📺</div>
                        <div class="card-title">直播答疑</div>
                        <div class="card-subtitle">直播答疑</div>
                    </div>
                    
                    <div class="knowledge-card" onclick="showCategory('courses')">
                        <div class="card-icon">💰</div>
                        <div class="card-title">付费课程</div>
                        <div class="card-subtitle">付费课程、付费服务</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="footer">暗云安全版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;盗版必究！</div>
        </div>
    </div>
</body>
</html>
