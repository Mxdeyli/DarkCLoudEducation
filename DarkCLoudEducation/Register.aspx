<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="DarkCLoudEducation.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>注册</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/register.css" />
</head>
<body>
    <div class="goBack">
        <a href="Login.aspx"><img src="images/back.png" alt="back" /></a>
    </div>
    <div class="register-container" id="register">
        <div class="register-box">
            <div class="logo-container">
                <div class="logo">
                    <img src="images/logo (1).png" alt="logo" />
                </div>
                <div class="site-title">用户注册</div>
            </div>
            <form id="registerForm" runat="server">
                <div class="input-group">
                    <label>用户名</label>
                    <input type="text" id="username" name="username" placeholder="请输入用户名" required=" " />
                </div>
                <div class="input-group">
                    <label>密码</label>
                    <input type="password" id="password" name="password" placeholder="请输入密码" required=" " />
                </div>
                <div class="input-group">
                    <label>确认密码</label>
                    <input type="password" id="confirmPassword" placeholder="请再次输入密码" required=" " />
                </div>
                <asp:Button ID="Button1" runat="server" class="register-btn" Text="注册" OnClick="Button1_Click" />
            </form>
        </div>
    </div>
</body>
</html>
