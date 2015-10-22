var L2L : String;
var Player : GameObject;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player") {
Application.LoadLevel(L2L);
}
}