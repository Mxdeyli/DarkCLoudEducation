using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Model;

namespace BLL
{
    public class UserLoginBLL
    {
        UserLoginDAL dal = new UserLoginDAL();
        public UserLogin SelectUserLogin(string username)
        {
            return dal.SelectUserLogin(username);
        }
        public bool UpdatePwd(string username, string newpwd)
        {
            return dal.UpdatePwd(username, newpwd) > 0;
        }
        public bool InsertUser(string user,string pwd)
        {
            return dal.InsertUser(user,pwd)>0;
        }
    }
}
