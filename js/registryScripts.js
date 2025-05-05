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
            const response = await fetch('http://webforms.somee.com/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok)
            {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const result = await response.json();

            alert('Регистрация прошла успешно!');
        }
        catch (error)
        {
            alert('Произошла ошибка при регистрации.');
        }
    });