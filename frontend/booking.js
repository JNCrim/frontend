document.getElementById("Room-booking-form").addEventListener('submit',function(event) {
    event.preventDefault();
// get values of form fields
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
// check if all fields are met.
    if (!room || !date || !time){
        alert('Please fill out all fields');
    }else{
        alert(`Room booked: ${room} on ${date} at ${time}`);
    }
    });