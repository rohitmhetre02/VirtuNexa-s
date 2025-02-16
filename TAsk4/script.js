const formSteps = document.querySelectorAll('.form-step');
const nextButtons = document.querySelectorAll('.next-btn');
const prevButtons = document.querySelectorAll('.prev-btn');
const progressBar = document.getElementById('progress');
let currentStep = 0;

function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle('active', index === step);
  });
  updateProgressBar(step);
}

function updateProgressBar(step) {
  const progress = ((step + 1) / formSteps.length) * 100;
  progressBar.style.width = `${progress}%`;
}

nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signup successful!');
});

function scrollToSignup() {
  document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

const loginModal = document.getElementById('login-modal');
const loginLink = document.getElementById('login-link');
const closeBtn = document.querySelector('.close-btn');

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

showStep(currentStep);