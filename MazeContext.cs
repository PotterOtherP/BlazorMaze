using Microsoft.EntityFrameworkCore;

namespace BlazorMaze {

    public class MazeContext : DbContext {

        public MazeContext (DbContextOptions<MazeContext> options) : base(options)
        {

        }

        public DbSet<MazeModel> MazeModels { get; set; }
    }
}