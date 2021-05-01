using Microsoft.EntityFrameworkCore.Migrations;

namespace BlazorMaze.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MazeModels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GridString = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WallColorString = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SpaceColorString = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MazeModels", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MazeModels");
        }
    }
}
