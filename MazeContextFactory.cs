using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BlazorMaze {

    public class MazeContextFactory : IDesignTimeDbContextFactory<MazeContext> {

        public MazeContext CreateDbContext(string[] args) {

            var connectionString = "Server=tcp:nst-sqldb-server.database.windows.net,1433;Initial Catalog=nst-sqldb;Persist Security Info=False;User ID=nstsqlsvr;Password=sz21danSQSV;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            var optionsBuilder = new DbContextOptionsBuilder<MazeContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new MazeContext(optionsBuilder.Options);

        }

    }

}