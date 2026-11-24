using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class SqlHelper
    {
        public static SqlConnection GetConnection()
        {
            string connectionString = Environment.GetEnvironmentVariable("DARKCLOUDEDUCATION_CONNECTION_STRING");
            if (string.IsNullOrWhiteSpace(connectionString))
                throw new InvalidOperationException("请先配置 DARKCLOUDEDUCATION_CONNECTION_STRING。");
            return new SqlConnection(connectionString);
        }

        public static int ExecuteNonQuery(string sql, params SqlParameter[] parameters)
        {
            using (var conn = GetConnection())
            {
                conn.Open();
                using (var cmd = new SqlCommand(sql, conn))
                {
                    if (parameters != null && parameters.Length > 0)
                        cmd.Parameters.AddRange(parameters);
                    return cmd.ExecuteNonQuery();
                }
            }
        }

        public static object ExecuteScalar(string sql, params SqlParameter[] parameters)
        {
            using (var conn = GetConnection())
            {
                conn.Open();
                using (var cmd = new SqlCommand(sql, conn))
                {
                    if (parameters != null && parameters.Length > 0)
                        cmd.Parameters.AddRange(parameters);
                    return cmd.ExecuteScalar();
                }
            }
        }

        public static SqlDataReader ExecuteReader(string sql, params SqlParameter[] parameters)
        {
            var conn = GetConnection();
            using (var cmd = new SqlCommand(sql, conn))
            {
                if (parameters != null && parameters.Length > 0)
                    cmd.Parameters.AddRange(parameters);
                try
                {
                    conn.Open();
                    return cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
                catch (Exception ex)
                {
                    conn.Close();
                    conn.Dispose();
                    throw ex;
                }
            }
        }

        public static DataTable ExecuteDataTable(string sql, params SqlParameter[] parameters)
        {
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            using (SqlDataAdapter da = new SqlDataAdapter(sql, GetConnection()))
            {
                if (parameters != null && parameters.Length > 0)
                    da.SelectCommand.Parameters.AddRange(parameters);
                da.Fill(ds, "dt");
                dt = ds.Tables["dt"];
            }
            return dt;
        }
    }
}
