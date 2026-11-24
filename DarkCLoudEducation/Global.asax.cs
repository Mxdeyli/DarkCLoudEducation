using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace DarkCLoudEducation
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Application["Online"] = 0;
            Application["chat"] = new Queue<Chatroom.ChatMessage>();
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            Application.Lock();
            try
            {
                Application["Online"] = (int)Application["Online"] + 1;
            }
            finally
            {
                Application.UnLock();
            }
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {
            Application.Lock();
            try
            {
                Application["Online"] = Math.Max(0, (int)Application["Online"] - 1);
            }
            finally
            {
                Application.UnLock();
            }
        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}
