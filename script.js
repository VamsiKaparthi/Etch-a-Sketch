const container = document.getElementById('c');

let grid = document.createElement("div");
grid.style.backgroundColor = "white";
function gridMaker(n){
    grid.style.width = `calc(600px/${n})`;
    grid.style.height = `calc(600px/${n})`;
    for(let i = 0 ; i< n**2 ; i++){
        container.appendChild(grid.cloneNode(true));
    }
    

}
gridMaker(16);