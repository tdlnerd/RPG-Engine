var Replacement : GameObject;
var GOTO : Vector2;
var Replace = true;
var DoorScript = true;
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Explode") {
		if (Replace == true) {
	var re = Instantiate(Replacement, transform.position, transform.rotation);
		if (DoorScript == true) {
	re.gameObject.GetComponent(Door).Target = GOTO;
	}
	}
	gameObject.SetActive(false);
	}
}

