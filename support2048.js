documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosTop(i , j){
	return cellSpace+i*(cellSpace+cellSideLength);
}

function getPosLeft(i , j){
	return cellSpace+j*(cellSpace+cellSideLength);
}

function getNumberBackgroundColor(i){
	switch(i) {
		case 2:
			return "#E9DEDE";
			break;
		case 4:
			return"#DEACAC";
			break;
		case 8:
			return"#BF4E4E";
			break;
		case 16:
			return"#DE3131";
			break;
		case 32:
			return"#C11414";
			break;
		case 64:
			return"#F80E0E";
			break;
		case 128:
			return"#8973EE";
			break;
		case 256:
			return"#2C25CD";
			break;
		case 512:
			return"#389744";
			break;
		case 1024:
			return"#25EAC8";
			break;
		case 2048:
			return"#1279A4";
			break;
		case 4096:
			return"#E1D940";
			break;
	}
	return"black";

}

function getNumberColor(i){
	if(i<=4){
		return"#181BC3";
	}
	else{
		return"#FFF";
	}

}

// function getNumberText( number ){
//     switch( number ){
//         case 2:return "小白";break;
//         case 4:return "实习生";break;
//         case 8:return "程序猿";break;
//         case 16:return "项目经理";break;
//         case 32:return "架构师";break;
//         case 64:return "技术经理";break;
//         case 128:return "高级经理";break;
//         case 256:return "技术总监";break;
//         case 512:return "副总裁";break;
//         case 1024:return "CTO";break;
//         case 2048:return "总裁";break;
//         case 4096:return "#a6c";break;
//         case 8192:return "#93c";break;
//     }

//     return "black";
// }

function nospace(board){
	for (var i = 0; i < 4; i++)
		for (var j = 0; j < 4; j++) 
			if (board[i][j] == 0)
				return false;
			
			
	return true;
				
}

function canMoveLeft(board){
	for(i = 0;i < 4;i++)
		for(j = 1;j < 4;j++)
			if(board[i][j] != 0)
				if(board[i][j-1] == 0 || board[i][j-1] == board[i][j])
					return true;
				
	return false;
}

function canMoveUp(board){
	for(j = 0;j < 4;j++)
		for(i = 1;i < 4;i++)
			if(board[i][j] != 0)
				if(board[i-1][j] == 0 || board[i-1][j] == board[i][j])
					return true;
				
	return false;
}

function canMoveRight(board){
	for(i = 0;i < 4;i++)
		for(j = 2;j >= 0;j--)
			if(board[i][j] != 0)
				if(board[i][j+1] == 0 || board[i][j+1] == board[i][j])
					return true;
				
	return false;
}

function canMoveDown(board){
	for(j = 0;j < 4;j++)
		for(i = 2;i >= 0;i--)
			if(board[i][j] != 0)
				if(board[i+1][j] == 0 || board[i+1][j] == board[i][j])
					return true;
				
	return false;
}

function noBlockHorizontal(row , col1 , col2 , board){
	for(var i = col1 + 1;i < col2;i++)
		if(board[row][i] != 0)
			return false;
		
	return true;
}

function noBlockVertical(col , row1 , row2 , board){
	for(var i = row1 + 1;i < row2;i++)
		if(board[i][col] != 0)
			return false;
		
	return true;
}

function nomove(board){
	if( canMoveLeft(board) ||
		canMoveRight(board) ||
		canMoveUp(board) ||
		canMoveDown(board) )
		return false;
	return true;
}


