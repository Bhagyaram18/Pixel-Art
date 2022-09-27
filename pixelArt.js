var rows = 5;
var columns = 7;
var colors = [
    'red',
    'green',
    'orange',
    'pink',
    'yellow',
    'black',
    'purple',
    'blue'
];
var selectedColor;
var gridPalette = document.querySelector('.gridPalette');
var colorPalette = document.querySelector('.colorPalette');


var changeBg = (event)=>{
    if(selectedColor){
        event.target.style.background = selectedColor;
    }
};

var selectBg = (event)=>{
    selectedColor = event.target.style.background;
};

// const main=(()=>{
//     for(let i=1;i<=rows;i++){
//         let rowDiv = document.createElement('div');
//         rowDiv.id = i;
//         rowDiv.classList.add('rowDiv');
//         gridPalette.appendChild(rowDiv);
//         for(let j=1;j<=columns;j++){
//             let palette = document.createElement('div');
//             palette.id = `${i}${j}`;
//             palette.classList.add('palettes');
//             palette.addEventListener('click',(event)=>changeBg(event));
//             rowDiv.appendChild(palette);
//         }
//     }
//     for(let k=1;k<=colors.length;k++){
//         var colorGrid = document.createElement('div');
//         colorGrid.id = `c-${k}`;
//         colorGrid.classList.add('palettes');
//         colorGrid.style.background = `${colors[k-1]}`;
//         colorGrid.addEventListener('click', (event)=>selectBg(event))
//         colorPalette.appendChild(colorGrid);
//     }
// })();

//second way ...using event delegation instead of attaching eventlistener to each div
const main=(()=>{
    for(let i=1;i<=rows;i++){
        let rowDiv = document.createElement('div');
        rowDiv.id = i;
        rowDiv.classList.add('rowDiv');
        gridPalette.appendChild(rowDiv);
        for(let j=1;j<=columns;j++){
            let palette = document.createElement('div');
            palette.id = `${i}${j}`;
            palette.classList.add('palettes');
            // palette.addEventListener('click',(event)=>changeBg(event));
            rowDiv.appendChild(palette);
        }
    }
    for(let k=1;k<=colors.length;k++){
        var colorGrid = document.createElement('div');
        colorGrid.id = `c-${k}`;
        colorGrid.classList.add('palettes');
        colorGrid.style.background = `${colors[k-1]}`;
        // colorGrid.addEventListener('click', (event)=>selectBg(event))
        colorPalette.appendChild(colorGrid);
    }
})();
gridPalette.addEventListener('click',(event)=>{
document.getElementById(`${event.target.id}`).style.background = selectedColor;
});

colorPalette.addEventListener('click',(event)=>{
    selectedColor = document.getElementById(`${event.target.id}`).style.background;
})
