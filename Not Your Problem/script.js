// Function to add hover effect to buttons
function addHoverEffectToButtons() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.classList.add('hover-effect');
    });

    button.addEventListener('mouseout', () => {
      button.classList.remove('hover-effect');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addHoverEffectToButtons();

  let currentNotification = null;

  // Function to show notification
  function showNotification(selector) {
    if (currentNotification) {
      currentNotification.style.opacity = 0;
      currentNotification.style.visibility = 'hidden';
    }

    const notification = document.querySelector(selector);
    notification.style.transform = 'translateY(0)';
    notification.style.visibility = 'visible';
    notification.style.opacity = 1;
    currentNotification = notification;

    // Hide the notification after 5 seconds (adjust as needed)
    const notificationDuration = 5000; // 5 seconds
    setTimeout(() => {
      notification.style.opacity = 0;
      notification.style.visibility = 'hidden';
      currentNotification = null;
    }, notificationDuration);
  }

  // Function to show notification for Instagram
  document.getElementById('instagram-btn').addEventListener('click', () => {
    showNotification('.notification-instagram');
  });

  // Function to show notification for Facebook
  document.querySelector('.facebook').addEventListener('click', () => {
    showNotification('.notification-facebook');
  });

  // Function to show notification for Discord
  document.getElementById('discord-btn').addEventListener('click', () => {
    showNotification('.notification-discord');
  });
});

AOS.init();