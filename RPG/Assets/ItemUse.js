var BombMenu : UI.Toggle;
var BombCounter : UI.Text;
var Bomb : GameObject;
var BombCount : int;
function Update () {
	if (Input.GetKeyDown("x")) {
		if (BombMenu.isOn == true && BombCount > 0) {
		var b = Instantiate(Bomb, transform.position, transform.rotation);
		BombCount -= 1;
		}
	}
	BombCounter.text = "x " + BombCount.ToString();
}