document.getElementById('Booking Page').addEventListener('Done', function(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/xleqwyol", {
        method:'POST',
        body:data,
    }).then(Response => {
        if (Response.ok){
            alert('Success');
        }
        else{
            alert('Error');
        }
    });
    document.getElementById
    ('Booking Page').reset();
});