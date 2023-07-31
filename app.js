// JavaScript code for the prototype goes here

// Simulated data for personalized exercise routines
const exerciseOptions = [
    { name: 'Stretching', description: 'Gentle stretching exercises to improve flexibility.' },
    { name: 'Yoga', description: 'Yoga poses to promote relaxation and strength.' },
    { name: 'Chair Exercises', description: 'Exercises that can be done while sitting on a chair.' },
    { name: 'Low-Impact Cardio', description: 'Low-impact exercises to improve cardiovascular health.' },
  ];
  
  // Simulated data for health tracking
  const healthTrackingForm = document.getElementById('health-tracking-form');
  
  // Simulated data for social network features
  const socialNetworkSection = document.getElementById('social-network');
  const socialNetworkData = [
    { username: 'Sunita123', message: 'Excited to join this platform!' },
    { username: 'JohnDoe', message: 'Hello, everyone!' },
  ];
  
  // Display exercise options in the "Exercises" section
  const exercisesSection = document.getElementById('exercises');
  exerciseOptions.forEach((exercise) => {
    const exerciseCard = document.createElement('div');
    exerciseCard.classList.add('exercise-card');
    exerciseCard.innerHTML = `
      <h3>${exercise.name}</h3>
      <p>${exercise.description}</p>
    `;
    exercisesSection.appendChild(exerciseCard);
  });
  
  // Log health tracking data when the form is submitted (simulated action)
  healthTrackingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const log = {};
    for (const [key, value] of formData.entries()) {
      log[key] = value;
    }
    console.log('Health Tracking Log:', log);
    event.target.reset();
  });
  
  // Display social networking data in the "Social Network" section
  const socialNetworkList = document.createElement('ul');
  socialNetworkData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${data.username}:</strong> ${data.message}
    `;
    socialNetworkList.appendChild(listItem);
  });
  socialNetworkSection.appendChild(socialNetworkList);
  