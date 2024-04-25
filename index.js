//CLOCK
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.querySelector('[data-time="hours"]').textContent = hours;
    document.querySelector('[data-time="minutes"]').textContent = minutes;
    document.querySelector('[data-time="seconds"]').textContent = seconds;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

//CLOCK END






//DEGREES CHANGE ON CLICK
// Get the elements
const celsiusRadio = document.getElementById('celsius');
const fahrenheitRadio = document.getElementById('fahr');
const weatherInfo = document.getElementById('weather');


const updateWeather = () => {
    if (celsiusRadio.checked) {
       
        const weatherData = 25; 
        weatherInfo.textContent = `Current weather: ${weatherData}°C`;
    } else if (fahrenheitRadio.checked) {
 const weatherData = 25; 
 const convertedTemp = (weatherData * 9/5) + 32; 
 weatherInfo.textContent = `Current weather: ${convertedTemp.toFixed(2)}°F`;
    }
};

// Add event listeners to radio buttons
celsiusRadio.addEventListener('change', updateWeather);
fahrenheitRadio.addEventListener('change', updateWeather);

// Initial call to update weather based on default radio button state
updateWeather();





//SHOW AND HIDE NAVBAR// 
//navbar
const openNavMenuButton = document.getElementById('open-nav-menu');
const closeNavMenuButton = document.getElementById('close-nav-menu');
const wrapper = document.querySelector('.wrapper');

// Function to open the navbar
const openNavMenu = () => {
  wrapper.classList.add('active');
};

// Function to close the navbar
const closeNavMenu = () => {
  wrapper.classList.remove('active');
};

// Event listener for opening the navbar
openNavMenuButton.addEventListener('click', openNavMenu);

// Event listener for closing the navbar
closeNavMenuButton.addEventListener('click', closeNavMenu);






//image courusol///
const mainImage = document.getElementById('mainImage');
const imageArray = ['./assets/gallery/image1.jpg', './assets/gallery/image2.jpg','./assets/gallery/img1.png','./assets/gallery/image3.jpg']; // Array of image paths
let currentImageIndex = 0; // Index of currently displayed image


const handleImageTransition = () => {
  mainImage.style.opacity = '0'; // (fade out)
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length; // Update index (wrap around)
    mainImage.src = imageArray[currentImageIndex]; // Change image source
    mainImage.style.opacity = '1'; // Set opacity to 1 (fade in)
  }, 500); // Wait 500 milliseconds before changing image
};

// Set the interval for automatic transition
const intervalId = setInterval(handleImageTransition, 3000); // Change image every 3 seconds




//products
// Function to generate a random image URL
const getRandomImageUrl = () => {
  const imageUrls = [
    './assets/products/img1.png',
    './assets/products/img2.png',
    './assets/products/img3.png',
    './assets/products/img4.png',
    './assets/products/img5.png',
    './assets/products/img6.png'
  ];
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

// Function to display images based on the selected filter
const displayImages = (amount) => {
  const productsArea = document.querySelector('.products-area');
  productsArea.innerHTML = ''; // Clear existing images
  
  for (let i = 0; i < amount; i++) {
    const img = document.createElement('img');//creates image element based on amount specified
    img.src = getRandomImageUrl();
    productsArea.appendChild(img);//adding image to the product area 
  }
};

// Add event listeners to radio buttons
const allRadio = document.getElementById('all');
const paidRadio = document.getElementById('paid');
const freeRadio = document.getElementById('free');

allRadio.addEventListener('change', () => {//event listner and handler
  displayImages(3);                       
});

paidRadio.addEventListener('change', () => {
  displayImages(2);
});

freeRadio.addEventListener('change', () => {
  displayImages(1);
});

// Initial display when the page loads
displayImages(3); // Display 3 images by default


//FREQUENTLY ASKED QUESTIONS

const faqDetails = document.querySelectorAll('#faqs details'); //SELECTS ALL FAQ DETAILS  ELEMENTS THAT ARE CHILDREN OF THE FAQS ID

faqDetails.forEach(detail => {
  detail.addEventListener('click', () => {
    faqDetails.forEach(d => {
      if (d !== detail) {
        d.removeAttribute('open');   //EXECUTES THECODE FOR EACH FAQ IF NOT THE ONCE CLICKED REMOVE IT
      }
    });
  });
});

