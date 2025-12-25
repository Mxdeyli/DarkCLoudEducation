<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Category.aspx.cs" Inherits="DarkCLoudEducation.Category" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>分类页面</title>
    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/category.css" />
    <script type="text/javascript" src="js/createcard.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="category-page" id="categoryPage">
            <div class="category-header">
                <asp:Button ID="Button1" runat="server" class="back-btn" Text="← 返回首页" OnClick="Button1_Click" />
                <h1 id="categoryTitle">分类标题</h1>
                <p id="categoryDesc">分类描述</p>
            </div>
            <div class="cards-section">
                <div class="cards-grid" id="subcategoryGrid"></div>
            </div>
        </div>
    </form>
</body>
</html>
