  function toggleDetails() {
    const details = document.getElementById('resumeDetails');
    if (details.style.display === 'block') {
      details.style.display = 'none';
    } else {
      details.style.display = 'block';
    }
  }



  function displayProject(url) {
    var popup = document.getElementById("projectPopup");
    var iframe = document.getElementById("projectFrame");
    iframe.src = url;

    iframe.style.width = "100%"; // Set the desired width
    iframe.style.height = "100%"; // Set the desired height
    popup.style.display = "block";
  }
  
  function closePopup() {
    var popup = document.getElementById("projectPopup");
    popup.style.display = "none";
  }



 
function submitForm(event) {
    event.preventDefault(); 

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save form data to localStorage
    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));



    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').style.display = 'block';
    
}