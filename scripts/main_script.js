var grid_size = 6;
var current_level = 5;
var selectedIndex = [];
var countOfFlipcard = 0;
function initBoard()
{
    refreshBoard();
    if(current_level < (grid_size * grid_size))
        setIndexOfCircles();
    document.getElementById('level_count').innerHTML = 'Difficulty level : '+current_level;   
}

function refreshBoard()
{
    var generatedDiv = '';
    for (let i = 0; i < grid_size; i++) {
        generatedDiv += '<tr>';
        for (let j = 0; j < grid_size; j++) {
            generatedDiv += '<td><div class="tile" id="'+ i +','+ j +'" onclick="flipCard(this,this.id)"></div></td>'
        }
        generatedDiv += '</tr>';
    }
    document.getElementById('memory_board').innerHTML = generatedDiv;
}

function generateRandomNumber(upperLimit)
{
    return Math.floor(Math.random() * Math.floor(upperLimit));
}

function setIndexOfCircles()
{
    while(selectedIndex.length < current_level){
        var i = generateRandomNumber(grid_size);
        var j = generateRandomNumber(grid_size); 
        var locatedDivID = i + ',' + j;
        if(!selectedIndex.includes(locatedDivID))
            selectedIndex.push(locatedDivID);
        document.getElementById(locatedDivID).style.background = 'url(res/circle.png) no-repeat';
        document.getElementById(locatedDivID).style.backgroundColor = 'rgb(68, 68, 68)';
    }
    
}

function flipCard(tile, id)
{
    if(countOfFlipcard == 0)
    {
        vanishAllCircle();
    }
    if(selectedIndex.includes(id))
    {
        tile.style.background = 'url(res/circle.png) no-repeat';
        tile.style.backgroundColor = 'rgb(68, 68, 68)';
    }
    else
    {
        alert('You lost');
        document.location.reload();
    }
    countOfFlipcard++;
    if(countOfFlipcard == current_level)
    {
        current_level++;
        selectedIndex = [];
        countOfFlipcard = 0;
        initBoard();
        alert('Congrats! You won\nLevel : '+ current_level);
    }
}

function vanishAllCircle()
{
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            document.getElementById(i+','+j).style.background = 'none'
            document.getElementById(i+','+j).style.backgroundColor = 'rgb(68, 68, 68)';
        }
    }
}

function refresh()
{
    document.location.reload();
}