using Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserLoginDAL
    {
        public UserLogin SelectUserLogin(string username)
        {
            string sql = "select * from UserLogin where username=@username";
            SqlParameter[] para = new SqlParameter[] { new SqlParameter("@username", username) };
            UserLogin user = null;
            using (SqlDataReader dr = SqlHelper.ExecuteReader(sql, para))
            {
                if (dr.Read())
                {
                    user = new UserLogin();
                    user.ID = dr.GetInt32(0);
                    user.UserName = dr.GetString(1);
                    user.Pwd = dr.GetString(2);
                }
            }
            return user;
        }

        public int InsertUser(string username,string pwd)
        {
            string sql="insert into UserLogin(UserName,Pwd) values(@username,@pwd)";
            SqlParameter[] para = new SqlParameter[] {new SqlParameter("@username",username),new SqlParameter("@pwd",pwd)};
            return SqlHelper.ExecuteNonQuery(sql,para);
        }
    }
}
