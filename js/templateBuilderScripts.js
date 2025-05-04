document
    .getElementById("addSmallTextQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = 'Short question:';
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = `shortQuestion${document.querySelectorAll("#questionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = "Enter question's name";
        newInput.required = true;

        document.getElementById("questionsContainer").appendChild(newLabel);
        document.getElementById("questionsContainer").appendChild(newInput);
    });

document
    .getElementById("addFullTextQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = 'Full text question:';
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = `fullTextQuestion${document.querySelectorAll("#questionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = "Enter question's name";
        newInput.required = true;

        document.getElementById("questionsContainer").appendChild(newLabel);
        document.getElementById("questionsContainer").appendChild(newInput);
    });

document
    .getElementById("addNonNegIntQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = 'Non-negative integer question:';
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = 'nonNegIntQuestion';
        newInput.className = 'questionInput';
        newInput.placeholder = "Enter question's name";
        newInput.required = true;

        document
            .getElementById("questionsContainer")
            .appendChild(newLabel);
        document
            .getElementById("questionsContainer")
            .appendChild(newInput);
    });

document
    .getElementById("addWithResponsesOptionsQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = 'Question with responses options:';
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = 'questionWithResponsesOptions';
        newInput.className = 'questionInput';
        newInput.placeholder = "Enter question's name";
        newInput.required = true;

        document
            .getElementById("questionsContainer")
            .appendChild(newLabel);
        document
            .getElementById("questionsContainer")
            .appendChild(newInput);
    });



