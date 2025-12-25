<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Detail.aspx.cs" Inherits="DarkCLoudEducation.Detail" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>详细页面</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/detail.css" />
    <script type="text/javascript" src="js/detailshow.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="detail-page" id="detailPage">
            <div class="detail-container">
                <asp:Button ID="Button1" runat="server" class="back-btn" Text="← 返回" OnClick="Button1_Click" />
                <div class="detail-header">
                    <h1 id="detailTitle">文章标题</h1>
                    <div class="detail-meta">
                        <span>发布时间：<span id="detailDate">2024-01-01</span></span>
                        <span style="margin-left: 20px;">浏览量：<span id="detailViews">0</span></span>
                    </div>
                </div>
                <div class="detail-content" id="detailContent"></div>
            </div>
        </div>
    </form>
</body>
</html>
