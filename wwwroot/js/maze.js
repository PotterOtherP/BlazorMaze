const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const SVG_WIDTH = 1204;
const SVG_HEIGHT = 900;
const CH_WALL = 'X';
const CH_SPACE = "-";

let MazeGrid = [];

var Maze = {

    grid: [],
    startX: 0,
    startY: 0,
    exitX: 0,
    exitY: 0,

    complexity: 0,

    rows: 0,
    columns: 0,

    wall_left: 0,
    wall_top: 0,
    wall_right: 0,
    wall_bottom: 0

};

function DrawHorizontal(x, y, length, thickness, color)
{
    let el = document.createElementNS(SVG_NAMESPACE, "rect");
    let svg = document.getElementById("mazeSVG");

    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", length);
    el.setAttribute("height", thickness);
    el.setAttribute("fill", color);
    el.setAttribute("rx", 10);

    svg.appendChild(el);

}

function DrawVertical(x, y, length, thickness, color)
{
    let el = document.createElementNS(SVG_NAMESPACE, "rect");
    let svg = document.getElementById("mazeSVG");

    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", thickness);
    el.setAttribute("height", length);
    el.setAttribute("fill", color);
    el.setAttribute("rx", 10);

    svg.appendChild(el);

}

function PaintBackground(color) {

    let el = document.createElementNS(SVG_NAMESPACE, "rect");
    let svg = document.getElementById("mazeSVG");
    svg.innerHTML = "";

    el.setAttribute("x", 0);
    el.setAttribute("y", 0);
    el.setAttribute("width", SVG_WIDTH);
    el.setAttribute("height", SVG_HEIGHT);
    el.setAttribute("fill", color);

    svg.appendChild(el);

    el = document.createElementNS(SVG_NAMESPACE, "span");
    el.setAttribute("id", "gridLines");
    svg.appendChild(el);

}

function PaintMaze(spaceColorString, wallColorString) {

    let rows = Maze.grid.length;
    let columns = Maze.grid[0].length;
    let rowPixels = SVG_HEIGHT / Maze.rows;
    let columnPixels = SVG_WIDTH / Maze.columns;
    
    let svg = document.getElementById("mazeSVG");
    svg.innerHTML = "";
    PaintBackground(spaceColorString);

    // Horizontal wall sections
    for (let i = 0; i < Maze.rows; ++i)
    {
        let sectionLength = 0;
        let sectionX = 0;
        let sectionY = i * rowPixels;

        for (let j = 0; j < Maze.columns; ++j)
        {
            if (Maze.grid[i][j] == CH_WALL)
            {
                if (sectionLength == 0)
                    sectionX = j * columnPixels;

                ++sectionLength;
            }

            if (Maze.grid[i][j] != CH_WALL || j == Maze.columns - 1)
            {
                if (sectionLength > 1)
                {
                    DrawHorizontal(sectionX, sectionY, sectionLength * columnPixels, rowPixels, wallColorString);
                }

                sectionLength = 0;
            }
        }
    }

    // Vertical wall sections
    for (let i = 0; i < Maze.columns; ++i)
    {
        let sectionLength = 0;
        let sectionX = i * columnPixels;
        let sectionY = 0;

        for (let j = 0; j < Maze.rows; ++j)
        {
            if (Maze.grid[j][i] == CH_WALL)
            {
                if (sectionLength == 0)
                    sectionY = j * rowPixels;

                ++sectionLength;
            }

            if (Maze.grid[j][i] != CH_WALL || j == Maze.rows - 1)
            {
                if (sectionLength > 1)
                {
                    DrawVertical(sectionX, sectionY, sectionLength * rowPixels, columnPixels, wallColorString);
                } 

                sectionLength = 0;
            }
        }
    }
}

function SetMaze(gridString, complexity) {

    Maze.grid = [];

    var j = 0;
    Maze.grid.push([]);

    for (var i = 0; i < gridString.length - 1; ++i)
    {
        if (gridString[i] == '|')
        {
            Maze.grid.push([]);
            ++j;
        }

        else if (gridString[i] == CH_SPACE || gridString[i] == CH_WALL)
        {
            Maze.grid[j].push(gridString[i]);
        }
    }
    
    Maze.complexity = complexity;
    Maze.rows = complexity % 2 == 1 ? complexity * 3 : (complexity * 3) + 1;
    Maze.columns = (complexity * 4) + 1;

    Maze.wall_right = Maze.columns - 1;
    Maze.wall_bottom = Maze.rows - 1;

    for (var i = 0; i < Maze.grid[0].length; ++i)
    {
        if (Maze.grid[0][i] == CH_SPACE)
        {
            Maze.startX = i;
            Maze.startY = 0;
        }

        if (Maze.grid[Maze.rows - 1][i] == CH_SPACE)
        {
            Maze.exitX = i;
            Maze.exitY = Maze.rows - 1;
        }
    }

}