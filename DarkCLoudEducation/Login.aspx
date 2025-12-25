<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="DarkCLoudEducation.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>暗云安全 - 网络安全知识库</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/loginstyle.css" />
</head>
<body>
    <div class="login-container" id="loginPage">
    <div class="login-box">
        <div class="logo-container">
            <div class="logo">
                <img src="images/logo (1).png" alt="logo" />
            </div>
            <div class="site-title">暗云安全</div>
            <div class="site-subtitle">懂进攻，知防守，先正向，后逆向</div>
        </div>
        <form id="loginForm" runat="server">
            <div class="input-group">
                <label>用户名</label>
                <input type="text" id="username" name="username" placeholder="请输入用户名" required="" />
            </div>
            <div class="input-group">
                <label>密码</label>
                <input type="password" id="password" name="password" placeholder="请输入密码" required="" />
            </div>
            <asp:Button ID="Button1" runat="server" Text="登 录" CssClass="login-btn" OnClick="Button1_Click" />
        </form>
    </div>
</div>
</body>
</html>
