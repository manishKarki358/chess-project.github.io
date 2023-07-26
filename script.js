let files=['a','b','c','d','e','f','g','h']
let ranks=[1,2,3,4,5,6,7,8]

let gamestatus=""
let turnToMove=document.querySelector(".turn-to-move").innerText
console.log(turnToMove);

// getting pieces and squares
let chessBoard=document.querySelector('.chess-board')
let pieces=document.querySelectorAll('.piece')

pieces.forEach(piece=>{
if(turnToMove==="white"){
  if(piece.classList.contains('black')){
    piece.draggable=false
  }
    if (piece.classList.contains('white')){
        piece.draggable=true
        piece.addEventListener('dragover',(e)=>{
            e.preventDefault()
            let currentSquare=piece.parentElement
            currentSquare.classList.add('hovered')
            let currentSquareName=currentSquare.id
            let currentRank=parseInt(currentSquare.getAttribute("data-rank"))
            let currentFile=currentSquare.getAttribute("data-file")
            console.log(currentFile,currentRank);
           
            if (piece.classList.contains('pawns')){
                let movableSquares=[]
                let movableSqr1
                let movableSqr2
                let movableSqr3
                let movableSqr4
                console.log("it is white pawn");
                if(currentRank!==2){ 
let rankToMove=currentRank+1
movableSqr1=currentFile+rankToMove
movableSqr2=files[(files.indexOf(currentFile)-1)]+rankToMove
movableSqr3=files[(files.indexOf(currentFile)+1)]+rankToMove
movableSquares.push(movableSqr1,movableSqr2,movableSqr3)
//console.log(movableSquares);
                }
               
                 if(currentRank===2){
                    let rankToMove1=currentRank+1
                    let rankToMove2=currentRank+2
                    movableSqr1=currentFile+rankToMove1
movableSqr2=files[(files.indexOf(currentFile)-1)]+rankToMove1
movableSqr3=files[(files.indexOf(currentFile)+1)]+rankToMove1
let movableSquareByDouble=currentFile+rankToMove2
movableSquares.push(movableSqr1,movableSqr2,movableSqr3,movableSquareByDouble)
//console.log(movableSquares);
                }
                console.log(movableSquares);      
            }
            if (piece.classList.contains('rooks')){
                console.log("it is rook");
            }
            if (piece.classList.contains('knights')){
                console.log("it is knight");
            }
            if (piece.classList.contains('bishops')){
                console.log("it is bishop");
            }
            if (piece.classList.contains('queens')){
                console.log("it is queen");
            }
            if (piece.classList.contains('kings')){
                console.log("it is king");
            }
    
    })
    }
}
if(turnToMove==="black"){
    if(piece.classList.contains('white')){
        piece.draggable=false
      }
    if(piece.classList.contains("black")){
        piece.draggable=true
    piece.addEventListener('dragover',()=>{
        
        let currentSquare=piece.parentElement
        let currentSquareName=currentSquare.id
        let currentRank=currentSquare.getAttribute("data-rank")
        let currentFile=currentSquare.getAttribute("data-file")
        console.log(currentRank,currentFile);
       
        if (piece.classList.contains('pawns')){
            console.log("it is pawn");
            
        }
        if (piece.classList.contains('rooks')){
            console.log("it is rook");
        }
        if (piece.classList.contains('knights')){
            console.log("it is knight");
        }
        if (piece.classList.contains('bishops')){
            console.log("it is bishop");
        }
        if (piece.classList.contains('queens')){
            console.log("it is queen");
        }
        if (piece.classList.contains('kings')){
            console.log("it is king");
        }
    })
    }
}
})

