const container = document.getElementById('c');




function gridMaker(n){
    for(let i = 0 ; i< n**2 ; i++){
        let grid = document.createElement("div");
        grid.style.backgroundColor = "white";
        grid.style.width = `calc(600px/${n})`;
        grid.style.height = `calc(600px/${n})`;
        grid.addEventListener('mouseover',()=>{
            grid.style.backgroundColor = "black";
        });
        container.appendChild(grid);
    }
}
gridMaker(64);
