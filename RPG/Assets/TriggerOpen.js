var Anim : Animator;

function OnCollisionEnter2D (hit : Collision2D) {
	Debug.Log("Collision");
	if (hit.gameObject.tag == "Player") {
	Debug.Log(Anim.GetBool("Switch"));
	Anim.SetBool("Switch", true);
	}
}