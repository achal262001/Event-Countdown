const endDate = "26 Jun 2024 12:30 PM";

document.getElementById("end_date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff <= 0) {
    alert("Your Time is Finished");
    return;
  }
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
  console.log(input[0].value);
}

// clock();

setInterval(() => {
  clock();
  alert("Your Time is Finished");
  console.log("Your Time is Finished");
}, 1000);
