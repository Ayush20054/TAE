function showReview() {
    // Get the form values
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const studentType = document.getElementById('studentType').value;
    const gender = document.getElementById('gender').value;

    // Show the review section
    document.getElementById('reviewName').innerText = name;
    document.getElementById('reviewUsername').innerText = username;
    document.getElementById('reviewEmail').innerText = email;
    document.getElementById('reviewPassword').innerText = password;
    document.getElementById('reviewPhone').innerText = phone;
    document.getElementById('reviewAddress').innerText = address;
    document.getElementById('reviewDob').innerText = dob;
    document.getElementById('reviewStudentType').innerText = studentType;
    document.getElementById('reviewGender').innerText = gender;
    document.getElementById('reviewSection').style.display = 'block';
}

function submitForm() {
    // Hide the form and review section
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('reviewSection').style.display = 'none';

    // Show the submission message
    document.getElementById('submissionMessage').style.display = 'block';
}
