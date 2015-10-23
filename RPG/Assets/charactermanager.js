var damage : UI.Slider;
function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
         }
         
function OnCollisionEnter2D (hit: Collision2D) {
	if (hit.gameObject.tag == "Enemy") {
	damage.value -= hit.gameObject.GetComponent(EnemyDamage).Dam;
}
}

function Update () {
	if (Application.loadedLevelName == "Test") {
	gameObject.isStatic = true;
	}
	else {
	gameObject.SetActive(true);
	}
}