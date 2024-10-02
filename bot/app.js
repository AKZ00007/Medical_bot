document.getElementById('lab-test-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to server for demo purposes.

    // Capture form data (example)
    const testType = document.getElementById('test-type').value;
    const testDate = document.getElementById('test-date').value;
    const additionalInfo = document.getElementById('additional-info').value;

    // Display the captured data for testing purposes (you can handle the submission here)
    console.log('Test Type:', testType);
    console.log('Test Date:', testDate);
    console.log('Additional Info:', additionalInfo);

    alert('Form submitted successfully!');
});