/* eslint-disable linebreak-style */
// Color change on click
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Secret double-click action
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('🎉 You discovered the secret!');
});

// Hover effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'salmon';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});

// Keypress detection
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Image gallery
const galleryImage = document.getElementById('galleryImage');
const nextImageBtn = document.getElementById('nextImageBtn');
const images = [
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg', // Mountain View
  'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg', // Beach Sunset
  'https://images.pexels.com/photos/34950/pexels-photo.jpg', // Forest Path
];

let currentImg = 0;
galleryImage.src = images[currentImg]; // Initial image

nextImageBtn.addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  galleryImage.src = images[currentImg];
});

// Accordion toggle logic for multiple sections
const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});


// Form validation
const form = document.getElementById('userForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.textContent = '';

  if (!email.value.includes('@')) {
    feedback.textContent = '❌ Invalid email format.';
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = '❌ Password must be at least 8 characters.';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = '✅ Form submitted successfully!';
});

// Real-time feedback
password.addEventListener('input', () => {
  if (password.value.length < 8) {
    feedback.textContent = '⚠️ Too short!';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = '✅ Looks good!';
    feedback.style.color = 'green';
  }
});
