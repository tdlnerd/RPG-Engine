var MinBound : Vector2;
var target: Transform;
var MaxBound : Vector2;
	// Speed in units per sec.
var speed: float;
var Pos : Vector3;
var Ani : SkeletonAnimationManager;
	
	function Update () {
		dist = Vector2.Distance(target.position, transform.position);
		var step = speed * Time.deltaTime;
			if (transform.position.x > MinBound.x && transform.position.x < MaxBound.x && dist < 5) {
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
		Ani.Walk = true;
		}
			if (dist > 5) {
			Ani.Walk = false;
			}
		if (transform.position.x- target.position.x > 0) {
		transform.rotation.y = 180;
		}
		if (transform.position.x- target.position.x < 0) {
		transform.rotation.y = 0;
		}
	}