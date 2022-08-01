// const data = [
//   {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   },
//   {
//     "title": "Play",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 2
//       },
//       "weekly": {
//         "current": 10,
//         "previous": 8
//       },
//       "monthly": {
//         "current": 23,
//         "previous": 29
//       }
//     }
//   },
//   {
//     "title": "Study",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 7
//       },
//       "monthly": {
//         "current": 13,
//         "previous": 19
//       }
//     }
//   },
//   {
//     "title": "Exercise",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 5
//       },
//       "monthly": {
//         "current": 11,
//         "previous": 18
//       }
//     }
//   },
//   {
//     "title": "Social",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 3
//       },
//       "weekly": {
//         "current": 5,
//         "previous": 10
//       },
//       "monthly": {
//         "current": 21,
//         "previous": 23
//       }
//     }
//   },
//   {
//     "title": "Self Care",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 2,
//         "previous": 2
//       },
//       "monthly": {
//         "current": 7,
//         "previous": 11
//       }
//     }
//   }
// ]


async function setData (period){

	const res = await fetch('./data.json')
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