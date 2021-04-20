const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const SVG_WIDTH = 1204;
const SVG_HEIGHT = 900;
const CH_WALL = 'X';
const CH_SPACE = '-';

function drawHorizontal(x, y, length, thickness, color)
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

function drawVertical(x, y, length, thickness, color)
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

function HelloMaze() {
    console.log("Hello from the maze JS file");
}

function paintBackground(color) {

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

function paintMaze(gridString, spaceColorString, wallColorString) {

    let grid = [];

    for (var i = 0; i < gridString.length; ++i)
    {
        if (gridString[i] == '|')
            grid.push([]);
    }


    console.log("Hello from paintMaze");
    console.log(grid);

    return;

    let rows = grid.length;
    let columns = grid[0].length;
    let rowPixels = SVG_HEIGHT / rows;
    let columnPixels = SVG_WIDTH / columns;

    let svg = document.getElementById("mazeSVG");
    svg.innerHTML = "";
    paintBackground(spaceColorString);

    // Horizontal wall sections
    for (let i = 0; i < rows; ++i)
    {
        let sectionLength = 0;
        let sectionX = 0;
        let sectionY = i * rowPixels;

        for (let j = 0; j < columns; ++j)
        {
            if (this.mazeGrid[i][j] == CH_WALL)
            {
                if (sectionLength == 0)
                    sectionX = j * columnPixels;

                ++sectionLength;
            }

            if (this.mazeGrid[i][j] != CH_WALL || j == columns - 1)
            {
                if (sectionLength > 1)
                {
                    this.drawHorizontal(sectionX, sectionY, sectionLength * columnPixels, rowPixels, wallColorString);
                }

                sectionLength = 0;
            }
        }
    }

    // Vertical wall sections
    for (let i = 0; i < columns; ++i)
    {
        let sectionLength = 0;
        let sectionX = i * columnPixels;
        let sectionY = 0;

        for (let j = 0; j < rows; ++j)
        {
            if (this.mazeGrid[j][i] == CH_WALL)
            {
                if (sectionLength == 0)
                    sectionY = j * rowPixels;

                ++sectionLength;
            }

            if (this.mazeGrid[j][i] != CH_WALL || j == rows - 1)
            {
                if (sectionLength > 1)
                {
                    this.drawVertical(sectionX, sectionY, sectionLength * rowPixels, columnPixels, wallColorString);
                } 

                sectionLength = 0;
            }
        }
    }
}