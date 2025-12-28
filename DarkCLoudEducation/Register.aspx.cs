using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using Model;

namespace DarkCLoudEducation
{
    public partial class Register : System.Web.UI.Page
    {
        UserLoginBLL bll = new UserLoginBLL();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string name=Request.Form["username"];
            string pwd = Request.Form["password"];
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(pwd))
            {
                Response.Write("<script>alert('用户名或密码不能为空！');</script>");
            }
            else
            {
                if (bll.InsertUser(name, pwd))
                {
                    Response.Write("<script>alert('注册成功！');window.location.href='Login.aspx';</script>");
                }
                else
                {
                    Response.Write("<script>alert('注册失败！');</script>");
                }
            }
        }
    }
}