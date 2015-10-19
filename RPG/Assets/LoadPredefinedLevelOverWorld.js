var L2L : String;

function OnTriggerStay (hit : Collider) {
if (hit.gameObject.tag == "OWPlayer" && Input.GetKeyDown("space")) {
Application.LoadLevel(L2L);
}
}