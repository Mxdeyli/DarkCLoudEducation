# DarkCLoudEducation

使用 Windows、.NET Framework 4.7.2、ASP.NET Web Forms 和 SQL Server。Visual Studio 需要安装 ASP.NET 和 Web 开发工作负载。

1. 创建 SQL Server 数据库并执行 `schema.sql`。
2. 将 `DARKCLOUDEDUCATION_CONNECTION_STRING` 设为该库的连接字符串，然后启动 Visual Studio 或 IIS Express。
3. 打开 `DarkCLoudEducation.sln`，还原 NuGet 包后运行，以 `Guest.aspx` 为首页。通过注册和登录页面进入聊天室。

聊天室在应用进程内保留最近 100 条消息，重启应用会清空消息。
