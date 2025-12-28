using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DarkCLoudEducation
{
    public partial class Chatroom : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string[] AllMessages = new string[] {};
            string UserName = Session["username"]?.ToString() ?? "";
            if (Session["username"] != null)
            {
                Label1.Text = Application["Online"].ToString();
                AllMessages = Application["chat"].ToString().Split('\n');
                JavaScriptSerializer js = new JavaScriptSerializer();
                string AllMessagesJson = js.Serialize(AllMessages);
                string UserNameJson = js.Serialize(UserName);
                ClientScript.RegisterStartupScript(
                    this.GetType(),
                    "InitData",
                    $"var allMessagesFromServer = {AllMessagesJson}; var userNameFromServer = {UserNameJson};",
                    true
                );
                Label2.Text = UserName;
                Response.AddHeader("refresh", "30");
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string old = Application["chat"] as string ?? "";
            string newMsg = Session["username"].ToString() + "|"
                          + TextBox1.Text + "|"
                          + DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss");

            string updated;

            if (string.IsNullOrWhiteSpace(old))
                updated = newMsg;
            else
                updated = old + "\n" + newMsg;

            Application.Lock();
            Application["chat"] = updated;
            Application.UnLock();
            TextBox1.Text = "";
            Response.Redirect(Request.RawUrl);
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Main.aspx");
            Session["UserName"] = null;
        }
    }
}