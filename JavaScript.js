//brandon vicinus
//4/19/16

//tictactoe functionality 

var turn = 1; //1=O, -1=X
var numTurns = 0; //easily check if reached max 




function print(x,y) {
    if (!document.getElementById) return;
    numTurns++;
 
    turn = turn * (-1);
    
    var btnName = "#Button" + x + y; 
    
    var btn; 

    if(turn == 1) {
        //document.getElementById(btnName).value = "O";
        //document.getElementById(btnName).disabled = "disabled"; 
        btn = $(btnName)[0];
        btn.value = "O";
    }
    else {
        //document.getElementById(btnName).value = "X";
        //document.getElementById(btnName).disabled = "disabled";
        btn = $(btnName)[0];
        btn.value = "X";
    }

    if (numTurns > 4) {  //minimum number of turns for a win to take place 
        checkWin(); 
    }
}

function checkWin() {
    var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
    btn1 = $('#Button11')[0]; 
    btn2 = $('#Button12')[0];
    btn3 = $('#Button13')[0];
    btn4 = $('#Button21')[0];
    btn5 = $('#Button22')[0];
    btn6 = $('#Button23')[0];
    btn7 = $('#Button31')[0];
    btn8 = $('#Button32')[0];
    btn9 = $('#Button33')[0];

    //checks for all possible winning combinations 
    if ((btn1.value == btn2.value == btn3.value) || (btn4.value == btn5.value == btn6.value) || (btn7.value == btn8.value == btn9.value) ||
        (btn1.value == btn4.value == btn7.value) || (btn2.value == btn5.value == btn8.value) || (btn3.value == btn6.value == btn9.value) ||
        (btn1.value == btn5.value == btn9.value) || (btn3.value == btn5.value == btn9.value) ) {
        //print win 
        document.getElementById("tbOutput").value = "WINNER";
    }
       
}




function reset() {
    turn = 1;
    numTurns = 0; 

    document.getElementById("tbOutput").value = "";

    document.getElementById("Button11").value = "";
    document.getElementById("Button12").value = "";
    document.getElementById("Button13").value = "";
    document.getElementById("Button21").value = "";
    document.getElementById("Button22").value = "";
    document.getElementById("Button23").value = "";
    document.getElementById("Button31").value = "";
    document.getElementById("Button32").value = "";
    document.getElementById("Button33").value = "";

    document.getElementById("Button11").disabled = "";
    document.getElementById("Button12").disabled = "";
    document.getElementById("Button13").disabled = "";
    document.getElementById("Button21").disabled = "";
    document.getElementById("Button22").disabled = "";
    document.getElementById("Button23").disabled = "";
    document.getElementById("Button31").disabled = "";
    document.getElementById("Button32").disabled = "";
    document.getElementById("Button33").disabled = "";
}
