using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;

namespace DarkCLoudEducation
{
    public partial class Chatroom : Page
    {
        private const int MaxMessages = 100;

        internal sealed class ChatMessage
        {
            public string User { get; set; }
            public string Text { get; set; }
            public string Time { get; set; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            string userName = Session["username"] as string;
            if (string.IsNullOrEmpty(userName))
            {
                Response.Redirect("Login.aspx");
                return;
            }

            ChatMessage[] messages;
            Application.Lock();
            try
            {
                Label1.Text = Application["Online"].ToString();
                messages = ((Queue<ChatMessage>)Application["chat"]).ToArray();
            }
            finally
            {
                Application.UnLock();
            }

            string json = new JavaScriptSerializer().Serialize(new { messages, userName });
            string encodedJson = HttpUtility.JavaScriptStringEncode(json, true);
            ClientScript.RegisterStartupScript(GetType(), "InitData",
                "window.chatData = JSON.parse(" + encodedJson + ");", true);
            Label2.Text = HttpUtility.HtmlEncode(userName);
            if (!IsPostBack)
                Response.AddHeader("Refresh", "30");
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string message = TextBox1.Text.Trim();
            if (message.Length == 0 || message.Length > TextBox1.MaxLength)
            {
                Label2.Text = "请输入 1 至 500 字的消息";
                return;
            }

            var entry = new ChatMessage
            {
                User = (string)Session["username"],
                Text = message,
                Time = DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")
            };

            Application.Lock();
            try
            {
                var messages = (Queue<ChatMessage>)Application["chat"];
                messages.Enqueue(entry);
                if (messages.Count > MaxMessages)
                    messages.Dequeue();
            }
            finally
            {
                Application.UnLock();
            }

            Response.Redirect("Chatroom.aspx");
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Session.Clear();
            Session.Abandon();
            Response.Redirect("Main.aspx");
        }
    }
}
