document
    .getElementById('RegistrationForm')
    .addEventListener('submit', async (event) =>
    {
        event.preventDefault();

        const formData =
        {
                name: document.getElementById('InputName').value,
                surname: document.getElementById('InputSurname').value,
                patronymic: document.getElementById('InputPatronymic').value,
                email: document.getElementById('InputEmail').value,
                passwordHash: document.getElementById('InputPassword1').value
        };

        try
        {
            const response = await fetch('https://webforms.somee.com/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                const errorMessage = errorResponse.detail;
                throw new Error(`${errorMessage}`);
            }

            const result = await response.json();
            alert('Registration successfully added!');
        } catch (error) {
            alert(error.message);
        }
    });