using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BlazorMaze {

    public class MazeContextFactory : IDesignTimeDbContextFactory<MazeContext> {

        public MazeContext CreateDbContext(string[] args) {

            var optionsBuilder = new DbContextOptionsBuilder<MazeContext>();
            optionsBuilder.UseSqlite("Data Source=MazeDatabase.db");

            return new MazeContext(optionsBuilder.Options);

        }

    }

}