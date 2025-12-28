<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Chatroom.aspx.cs" Inherits="DarkCLoudEducation.Chatroom" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>在线聊天室</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/nav.css" />
    <link rel="stylesheet" href="css/chatroom.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <script type="text/javascript" src="js/chatroom.js"></script>
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
                    <a href="Guest.aspx" class="nav-item">首页</a>
                    <a href="Main.aspx" class="nav-item">课程</a>
                    <a href="#" class="nav-item">工具</a>
                    <a href="#" class="nav-item">社区</a>
                    <a href="#" class="nav-item">讨论</a>
                    <asp:Button ID="Button2" runat="server" Text="注销" CssClass="exitBtn" OnClick="Button2_Click" />
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
            <div class="chat-window" id="chat-window">
                <div class="message received">你好，欢迎来到聊天室！</div>
                <div class="message sent">谢谢！很高兴认识大家。</div>
                <div class="message received">大家有什么新消息吗？</div>
                <div class="message sent">没有什么，就是闲聊。</div>
            </div>
            <div class="chat-input">
                <asp:Label ID="Label2" runat="server" style="margin-top:10px" Text="Label"></asp:Label>
                <asp:TextBox ID="TextBox1" runat="server" CssClass="textbox"></asp:TextBox>
                <asp:Button ID="Button1" runat="server" type="submit" Text="发送" style="padding: 10px 20px;background: #4caf50;border: none;border-radius: 20px;color: #ffffff;font-size: 1rem;cursor: pointer;transition: background 0.3s, transform 0.1s;box-shadow: 0 2px 5px rgba(0,0,0,0.2);" OnClick="Button1_Click" />
            </div>
        </div>
        <div>
            <div class="footer">暗云安全版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;盗版必究！</div>
        </div>
    </div>
    </form>
</body>
</html>
