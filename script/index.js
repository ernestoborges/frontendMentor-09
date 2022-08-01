async function setData (period){

	const res = await fetch('./data.json');
  	const data = await res.json();

	const title = document.querySelectorAll(".item-title");
	const current = document.querySelectorAll(".item-time");
	const previous = document.querySelectorAll(".item-last-period");

	switch(period) {
		case "daily":
			for (let i = 0; i < title.length; i++){
				title[i].innerHTML = data[i].title;
				current[i].innerHTML = data[i].timeframes.daily.current+"hrs";
				previous[i].innerHTML = "Yesterday - "+data[i].timeframes.daily.previous+"hrs";
			}
			break;
		case "weekly":
			for (let i = 0; i < title.length; i++){
				title[i].innerHTML = data[i].title;
				current[i].innerHTML = data[i].timeframes.weekly.current+"hrs";
				previous[i].innerHTML = "Last Week - "+data[i].timeframes.weekly.previous+"hrs";
			}
			break;
		case "monthly":
			for (let i = 0; i < title.length; i++){
				title[i].innerHTML = data[i].title;
				current[i].innerHTML = data[i].timeframes.monthly.current+"hrs";
				previous[i].innerHTML = "Last Month - "+data[i].timeframes.monthly.previous+"hrs";
			}
			break;
		default:
			break;
	}
}

const navElements = document.querySelectorAll(".nav-item");
for (let i = 0; i < navElements.length; i++){
	navElements[i].addEventListener("click", function(){
		for(let j = 0; j < navElements.length; j++){
			navElements[j].classList.remove("nav-item-selected");
		}
		this.classList.add("nav-item-selected");
		switch (navElements[i].classList[1]) {
			case "nav-item-daily":
					setData("daily");
				break;
			case "nav-item-weekly":
					setData("weekly");
				
				break;
			case "nav-item-monthly":
					setData("monthly");
				break;
			default:
				break;
		}
	});
}
$(document).ready( function() {
   $(".nav-item:nth-of-type(2)").trigger("click");
});
