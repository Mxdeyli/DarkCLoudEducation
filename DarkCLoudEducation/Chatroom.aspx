<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Chatroom.aspx.cs" Inherits="DarkCLoudEducation.Chatroom" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>在线聊天室</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/chatroom.css" />
    <link rel="stylesheet" href="css/footer.css" />
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
                    <a href="#" class="nav-item">课程</a>
                    <a href="#" class="nav-item">工具</a>
                    <a href="#" class="nav-item">社区</a>
                    <a href="#" class="nav-item">讨论</a>
                    <span class="nav-item">退出</span>
                </div>
            </div>
        </nav>
        <div class="chat-box">
            <div class="chat-header">
                <h1>在线聊天室</h1>
                <div class="chatcount">
                <h2>当前在线人数: <span class="count"><asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></span></h2>
                </div>
            </div>
            <div class="chat-window">
                <div class="message received">你好，欢迎来到聊天室！</div>
                <div class="message sent">谢谢！很高兴认识大家。</div>
                <div class="message received">大家有什么新消息吗？</div>
                <div class="message sent">没有什么，就是闲聊。</div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="输入消息...">
                <button>发送</button>
            </div>
        </div>
        <div>
            <div class="footer">暗云安全版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;盗版必究！</div>
        </div>
    </div>
    </form>
</body>
</html>
