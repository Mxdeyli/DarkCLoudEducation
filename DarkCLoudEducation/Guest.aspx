<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Guest.aspx.cs" Inherits="DarkCLoudEducation.Guest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>首页</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/guest.css" />
    <link rel="stylesheet" href="css/footer.css"  />
    <script type="text/javascript" src="js/scroll.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <nav class="navbar">
            <div class="navbar-content">
                <div class="nav-logo">
                    <img src="images/logo (1).png" alt="logo" />
                    <br />
                    <span class="nav-title">暗云安全</span>
                </div>
                <div class="nav-menu">
                    <a href="#" class="nav-item">首页</a>
                    <a href="Main.aspx" class="nav-item">课程</a>
                    <a href="#" class="nav-item">工具</a>
                    <a href="#" class="nav-item">社区</a>
                    <a href="Chatroom.aspx" class="nav-item">讨论</a>
                    <span class="nav-item" onclick="window.close();">退出</span>
                </div>
            </div>
        </nav>
        <div class="glass-sty">
            <div class="glass-anime">
                <div class="glass-logo">
                    <img src="images/logo (1).png" alt="logo" class="guest-img" />
                </div>
                <div class="glass-content">
                    <h1>欢迎来到暗云安全学习平台</h1>
                    <br />
                    <br />
                    <br />
                    <h2>我们将为您提供最新的网络安全技术和最实用的网络安全学习资源&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;聊天室v1.0</h2>
                </div>
            </div>
            <div class="btn-sty">
                <asp:Button ID="Button1" runat="server" class="btn-login" Text="前往登录&nbsp;&nbsp;|&nbsp;&nbsp;注册" OnClick="Button1_Click" />
                <asp:Button ID="Button2" runat="server" class="btn-load" Text="直接进入学习之旅" OnClick="Button2_Click" />
            </div>
            <div class="btn-hide" id="btn-down">
                <a href="#"><img src="images/downicon.png" alt="icon" /></a>
            </div>
        </div>
        <div>
            <div class="footer">暗云安全版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;盗版必究！</div>
        </div>
    </div>
    </form>
</body>
</html>
