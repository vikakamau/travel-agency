let tours = "https://project-2w2z.onrender.com/accommodation"
document.addEventListener('DOMContentLoaded', async(event) =>{
    const tours = await description()
})


function description(){

 let ul = document.querySelector("#list");
  fetch("https://project-2w2z.onrender.com/accommodation", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
  })
 .then(res => res.json())
 .then(loc => loc.forEach(list => {
    // console.log(list)
    document.querySelectorAll(".image-container").forEach((container, index) => {
        const list = loc[index];
        const descriptionHTML = `
        <ul>
            <li>Name: ${list.name}</li>
            <li>Location: ${list.location}</li>
            <li>Type: ${list.type}</li>
            <li>Price: ${list.price_per_night}</li>
            <li>Rating: ${list.rating}</li>
        </ul> `;
    container.querySelector(".description").innerHTML = descriptionHTML;
            });
        }))
 }

 

document.querySelectorAll("#acc").forEach(acc => {
    acc.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "rgba(226,0,0,0.7)";
    });

    acc.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "transparent";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tourItemsContainer = document.getElementById('tourItems');
  
    // Function to display tour details
    function showTourDetails(tour) {
      alert(`
        Name: ${tour.name}
        Location: ${tour.location}
        Description: ${tour.description}
        Activities: ${tour.activities.join(', ')}
      `);
    }
  
    // Fetch tour details from the URL
    fetch('https://project-2w2z.onrender.com/destination')
      .then(response => response.json())
      .then(data => {
        data.forEach(tour => {
          const tourItem = document.createElement('div');
          tourItem.classList.add('tours-col');
          tourItem.innerHTML = `
            <h3>${tour.name}</h3>
            <p><strong>Location:</strong> ${tour.location}</p>
            <button class="tour-button" data-tour-id="${tour.id}">More Details</button>
          `;
          tourItemsContainer.appendChild(tourItem);
        });
  
        document.querySelectorAll('.tour-button').forEach(button => {
          button.addEventListener('click', function() {
            const tourId = button.dataset.tourId;
            const tour = data.find(tour => tour.id === tourId);
            showTourDetails(tour);
          });
        });
      })
  });
  

