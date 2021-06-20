const buttons = document.querySelectorAll(".pagination button");
const select = document.querySelector(".pagination .select");

buttons.forEach(button => {
	button.addEventListener("pointerenter", mouseEnter);
});

function mouseEnter(e) {
	const target = e.currentTarget;

	gsap.to(select, {
		duration: 1.5,
		x: target.offsetLeft - 40,
		ease: Elastic.easeOut.config(0.4,0.3)
	});
}