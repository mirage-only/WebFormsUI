document.getElementById('RegistrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные из формы
    const formData = {
        name: document.getElementById('InputName').value,
        surname: document.getElementById('InputSurname').value,
        patronymic: document.getElementById('InputPatronymic').value,
        email: document.getElementById('InputEmail').value,
        password: document.getElementById('InputPassword1').value
    };

    try {
        const response = await fetch('https://localhost:44329/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const result = await response.json();
        console.log('Успешная регистрация:', result);
        alert('Регистрация прошла успешно!');
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        alert('Произошла ошибка при регистрации.');
    }
});