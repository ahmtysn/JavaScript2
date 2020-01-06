const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];
// Let's assume your hourly rate is €25. How much would you earn on that day?
// Write a program that finds out what your hourly rate on a Monday would be
// Use the`map` array function to take out the duration time for each task.
// Multiply each duration by a per - hour rate for billing and sum it all up.
// Output a formatted Euro amount, rounded to Euro cents, e.g: `€11.34`.
// Make sure the program can be used on any array of objects that contain a`duration` property with a number value

function calcMoney(tasks) {
  if (tasks.every(task => !isNaN(task.duration))) {
    const durationHourList = tasks.map(task => task.duration / 60);
    const totalHour = durationHourList.reduce((total, hour) => total + hour, 0);
    const totalEarnedMoney = totalHour * 25;
    return `All earned money for monday is €${totalEarnedMoney}..`;
  } else {
    return `Write values of duration as a number, please!!`;
  }
}
console.log(calcMoney(mondayTasks));
