let rad = document.getElementsByName('license-plan');
let cost = [0, 13, 22, 34];
let activeRad = 1;
let activeSel = 1;
function getSelectValue() {
	return document.getElementById('quantity');
}

function selectLicensePlan(input) {
	for (el of rad) {
		document.getElementById("plan-" + el.value).classList.remove("plan-active")
	}
	document.getElementById("plan-" + input.value).classList.add("plan-active");
	activeRad = input.value;
	document.getElementById("selPlan").innerHTML = "#" + activeRad;
	calculate(getSelectValue());
}

function calculate(select) {
	activeSel = select.value;
	document.getElementById('sum').innerHTML = activeSel * cost[activeRad];
}

