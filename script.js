const form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("formStatus");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Email sent!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)

function toggleMenuOn() {
    let element = document.getElementById('sidebar-menu')
    element.classList = "showMenu"
    console.log('zz fire function', element)
}

function toggleMenuOff(event) {
    event.stopPropagation()
    let element = document.getElementById('sidebar-menu')
    console.log('zz element',element.classList)
  
    element.classList = "hideMenu"
    console.log('zz fire function', element)
}