﻿var Text : String[];
var MessageBox : UI.Text;
var NPC : String;
var line = 0;
var Disp = false;
function OnTriggerStay2D () {
Disp = true;
}

function OnTriggerExit2D () {
Disp = false;
MessageBox.text = " ";
line = 0;
}

function Update () {
	if (Disp == true) {
MessageBox.text = NPC + ": " + Text[line];
if (Input.GetKeyDown("down") && line < Text.Length) {
	Debug.Log("Correct Code");
	line = line + 1;
	}
	if (Input.GetKeyDown("down") && line == Text.Length) {
	line = 0;
	MessageBox.text = " ";
	}
}	
}