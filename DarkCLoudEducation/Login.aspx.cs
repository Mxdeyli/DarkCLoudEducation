using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services.Description;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using Model; 


namespace DarkCLoudEducation
{
    public partial class Login : System.Web.UI.Page
    {
        UserLoginBLL bll = new UserLoginBLL();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string name = Request.Form["username"];
            string pwd = Request.Form["password"];
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(pwd))
            {
                Response.Write("<script>alert('用户名或密码不能为空！');</script>");
            }
            else
            {
                UserLogin user = bll.SelectUserLogin(name);
                if (user == null)
                {
                    Response.Write("<script>alert('用户名不存在！');</script>");
                }
                else
                {
                    if (user.Pwd == pwd)
                    {
                        Session["username"] = user.UserName;
                        Session["pwd"] = user.Pwd;
                        Response.Redirect("Main.aspx?UserName="+name);
                    }
                    else
                    {
                        Response.Write("<script>alert('密码错误！');</script>");
                    }
                }
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Register.aspx");
        }
    }
}