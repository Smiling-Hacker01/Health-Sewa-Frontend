const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault()
    //Collecting form data from the user
        const formData = new FormData(form);
        console.log(formData);
        
        //fetching rest api here 
        async function fetchData(url) {

        try{
               const response =  await fetch(url, {
                    method : "POST",
                    body : formData
                })

                const data = await response.json();
                
                if (!response.ok) {
                    if (response.status === 409) {
                        alert(data.msg);
                    }
                    else if (response.status === 400) {
                        alert(`Something didn't go as expected. Here's what we found :- ${data.msg}`);
                    }
                    else{
                        alert("Something went wrong " + data.msg)
                    }
                    return;
                }

                console.log("Response received from the frontend : ", data);
                alert("You have been successfully registered! Please log in to continue.");
                window.location.href= './login.html'
            }
            catch(error){
                console.log("Network or unexpected error : ", error);
                alert("An unexpected error occured. Please try again later.");
            }
        }
    // calling fetching function
    fetchData('https://health-sewa-backend.onrender.com/user/create');
    
    this.reset();
});