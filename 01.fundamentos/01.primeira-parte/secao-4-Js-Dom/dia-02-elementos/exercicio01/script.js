const header = document.getElementById("header-container");
header.style.backgroundColor = 'rgb(0,176,105)';

const urgency = document.getElementsByClassName('emergency-tasks')[0];
urgency.style.backgroundColor = 'rbg(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  const currentTaskHeader = emergencyTasksHeaders[index];
  currentTaskHeader.style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
  noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll(".no-emergency-tasks h3");
  for(let index = 0; index < noEmergencyTasksHeaders.length; index +=1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35,37,37)';
}

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = 'rgb(0, 53, 51)';