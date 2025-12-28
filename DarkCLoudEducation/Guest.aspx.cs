using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DarkCLoudEducation
{
    public partial class Guest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if (Session["username"]==null)
            {
                Response.Redirect("Login.aspx");
            }
            else
            {
                Response.Redirect("Main.aspx");
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Main.aspx");
        }

        protected void Button3_Click(object sender, EventArgs e)
        {
            Session["UserName"] = null;
        }
    }
}