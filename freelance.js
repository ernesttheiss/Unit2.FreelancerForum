// Initialize freelancers data
const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 }
  ];
  
  // Function to calculate the average starting price
  function calculateAveragePrice(freelancers) {
    const totalPrices = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    return totalPrices / freelancers.length;
  }
  
  // Function to display the freelancers and update average price
  function displayFreelancers() {
    const freelancersList = document.getElementById('freelancersList');
    const averagePriceSpan = document.getElementById('averagePrice');
  
    // Clear the list
    freelancersList.innerHTML = '';
  
    // Add freelancers to the list
    freelancers.forEach(freelancer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
      freelancersList.appendChild(listItem);
    });
  
    // Calculate and display the average starting price
    const averagePrice = calculateAveragePrice(freelancers);
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
  }
  
  // Function to simulate new freelancers being added every few seconds
  function simulateNewFreelancers() {
    setInterval(() => {
      // Simulate new freelancer data
      const newFreelancer = {
        name: 'Carol',
        occupation: 'Programmer',
        price: Math.floor(Math.random() * 100) + 50 // Generates a random price between 50 and 149
      };
  
      // Add the new freelancer to the list
      freelancers.push(newFreelancer);
  
      // Display updated list and average price
      displayFreelancers();
    }, 5000); // Add new freelancer every 5 seconds
  }
  
  // Initial display of freelancers and start simulation
  displayFreelancers();
  simulateNewFreelancers();