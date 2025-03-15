document.addEventListener('DOMContentLoaded', async (event) => {
  await fetchDestinations();
  await fetchAccommodation();
  await fetchTours();
});

async function fetchDestinations() {
  const response = await fetch('https://tour-f1wg.onrender.com/destination');
  const data = await response.json();
  const destinationItemsContainer = document.getElementById('destinationItems');

  if (Array.isArray(data)) {
    data.forEach(destination => {
      const destinationItem = document.createElement('div');
      destinationItem.classList.add('tours-col');
      destinationItem.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}" class="destination-image">
        <h3>${destination.name}</h3>
        <p><strong>Location:</strong> ${destination.location}</p>
        <p><strong>Description:</strong> ${destination.description}</p>
        <p><strong>Activities:</strong> ${destination.activities.join(', ')}</p>
      `;
      destinationItemsContainer.appendChild(destinationItem);
    });
  } else {
    console.error('Invalid data structure:', data);
  }
}
async function fetchAccommodation() {
  const response = await fetch('https://tour-f1wg.onrender.com/accommodation');
  const data = await response.json();
  console.log(data); 
  const accommodationItemsContainer = document.getElementById('accommodationItems');

if (Array.isArray(data)){
  data.forEach(accommodation => {
      const accommodationItem = document.createElement('div');
      accommodationItem.classList.add('tours-col');
      accommodationItem.innerHTML = `
      <img src="${accommodation.image}" alt="${accommodation.name}" class="accommodation-image">
        <h3>${accommodation.name}</h3>
        <p><strong>Location:</strong> ${accommodation.location}</p>
        <p><strong>Price per night:</strong> ${accommodation.price_per_night}</p>
        <p><strong>Rating:</strong> ${accommodation.rating}</p>
      `;
      accommodationItemsContainer.appendChild(accommodationItem);
    });
  } else {
    console.error('Invalid data structure:', data);
  }
}

async function fetchTours() {
  const response = await fetch('https://tour-f1wg.onrender.com/tours');
  const data = await response.json();
  console.log(data); 
  const toursItemsContainer = document.getElementById('toursItems');

if (Array.isArray(data)){
  data.forEach(tour => {
      const tourItem = document.createElement('div');
      tourItem.classList.add('tours-col');
      tourItem.innerHTML = `
      <img src="${tour.image}" alt="${tour.name}" class="tour-image">
        <h3>${tour.name}</h3>
        <p><strong>Duration:</strong> ${tour.duration}</p>
        <p><strong>Destination:</strong> ${tour.destination.join(', ')}</p>
        <p><strong>Accommodation:</strong> ${tour.accommodation}</p>
        <p><strong>Price:</strong> ${tour.price}</p>
        <p><strong>Description:</strong> ${tour.description}</p>
      `;
      toursItemsContainer.appendChild(tourItem);
    });
  } else {
    console.error('Invalid data structure:', data);
  }
}