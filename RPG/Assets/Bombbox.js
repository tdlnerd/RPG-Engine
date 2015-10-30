var Bomb : float;
var MessageBox : UI.Text;
var Collected = false;

function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}

function OnCollisionStay2D (hit : Collision2D) {
	Debug.Log("Hit chest " + hit.gameObject.tag);
	if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up") && Collected == false) {
	Collected = true;
	var Man = hit.gameObject.GetComponent(ItemUse);
	Man.BombCount += Bomb;
	MessageBox.text = "Acquired " + Bomb + " bombs!";
	yield WaitForSeconds (1.5);
	MessageBox.text = " ";
	gameObject.SetActive(false);
	}

}