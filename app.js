var arr = [[1,2,3],[1,2,3],[1,2,3]];
var arrX = [[],[],[]];
var arrY = [[],[],[]];

var move = "O";

function doReload(){
  location.reload();
}


for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr.length; j++){
    this.x = document.createElement("input");
    this.x.setAttribute("type","button");
    this.x.setAttribute("value","-");
    this.x.setAttribute("onclick","doMove(this);");
    this.x.setAttribute("id",i + "" + j);
    document.body.appendChild(this.x); 
  }
  this.y = document.createElement("br");
  document.body.appendChild(this.y);
}



function doMove(obj){
  if(move == "X"){
    arrY[obj.id[0]][obj.id[1]] = obj.id;
    move = "O";
  } else {
    arrX[obj.id[0]][obj.id[1]] = obj.id;
    move = "X";
  }
  document.getElementById(obj.id).value = move;
  chkWin(arrX, "X ");
  chkWin(arrY, "Y ");
  document.getElementById(obj.id).disabled = "disabled";
}




function chkWin(arr, name){
  var win;
  for(var i = 0; i < arr.length; i++){
    if(arr[0][0] != undefined && arr[1][1] != undefined && arr[2][2] != undefined || arr[0][2] != undefined && arr[1][1] != undefined && arr[2][0] != undefined){
      win = true;
    }

    for(var j = 0; j < 3; j++){
      if(arr[0][j] != undefined && arr[1][j] != undefined && arr[2][j] != undefined){
        win = true;
      }
    }
    if(arr[i][0] != undefined && arr[i][1] != undefined && arr[i][2] != undefined){
      win = true;
    }
  }
  if(win == true){
    alert(name + "win");
    doReload();
  }
}

