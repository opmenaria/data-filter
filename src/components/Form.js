import React from 'react'

const handleSub = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());

    console.log(jsonData);
    fetch('/action_page.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function Form() {
    return (
        <div>
            <form type="submit" onSubmit={(el) => handleSub(el)} action="/action_page.php" method="post">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" /><br /><br />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
