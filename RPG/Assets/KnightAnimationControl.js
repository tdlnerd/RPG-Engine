var previous: Vector3;
var velocity: float;
var Anim : Animator;
function Update () {
velocity = ((transform.position.x - previous.x)) / Time.deltaTime;
Adjust();
Anim.SetFloat("Speed", velocity);
}

function Adjust () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}

function OnCollisionEnter2D(hit : Collision2D) {
Anim.SetBool("Grounded", true);
Debug.Log("ONGROUND");
}

function OnCollisionExit2D (hit : Collision2D) {
Anim.SetBool("Grounded", false);
Debug.Log("OFFGROUND");
}

