namespace BlazorMaze {

    public class MazeModel {

        public int Id { get; set; }

        public int Complexity { get; set; }
        public string GridString { get; set; }
        public string WallColorString { get; set; }
        public string SpaceColorString { get; set; }
    }
}