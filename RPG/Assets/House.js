var L2L : String;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
Application.LoadLevel(L2L);
}
}  