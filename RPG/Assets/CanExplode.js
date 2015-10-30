var Replacement : GameObject;
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Explode") {
	var r = Instantiate(Replacement, transform.position, transform.rotation);
	Destroy(gameObject);
	}
}