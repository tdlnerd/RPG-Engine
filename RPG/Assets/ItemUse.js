var BombMenu : UI.Toggle;
var Bomb : GameObject;

function Update () {
	if (Input.GetKeyDown("x")) {
		if (BombMenu.isOn == true) {
		var b = Instantiate(Bomb, transform.position, transform.rotation);
	}
}
}