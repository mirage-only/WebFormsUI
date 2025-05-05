const inputPlaceHolder = "Enter question's name"

function addElement(elementId, element)
{
        document
            .getElementById(elementId)
            .appendChild(element)
}

document
    .getElementById("addSmallTextQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = `${document.querySelectorAll("#shortQuestionsContainer input").length + 1} short question:`;
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `shortQuestion${document.querySelectorAll("#shortQuestionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        addElement("shortQuestionsContainer", newLabel);
        addElement("shortQuestionsContainer", newInput);
    });

document
    .getElementById("addFullTextQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = `${document.querySelectorAll("#fullTextQuestionsContainer input").length + 1} full text question:`;
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `fullTextQuestion${document.querySelectorAll("#fullTextQuestionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        addElement("fullTextQuestionsContainer", newLabel);
        addElement("fullTextQuestionsContainer", newInput);
    });

document
    .getElementById("addNonNegIntQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = `${document.querySelectorAll("#nonNegativeIntegerQuestionsContainer input").length + 1} non-negative integer question:`;
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `nonNegativeIntegerQuestion${document.querySelectorAll("#nonNegativeIntegerQuestionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        addElement("nonNegativeIntegerQuestionsContainer", newLabel);
        addElement("nonNegativeIntegerQuestionsContainer", newInput);
    });

document
    .getElementById("addWithResponsesOptionsQuestion")
    .addEventListener("click", () => {

        const newLabel = document.createElement("label");
        newLabel.textContent = `${document.querySelectorAll("#withResponsesOptionsQuestionsContainer input").length + 1} question with responses options:`;
        newLabel.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `withResponsesOptionsQuestion${document.querySelectorAll("#withResponsesOptionsQuestionsContainer input").length + 1}`;
        newInput.className = 'questionInput';
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        const newDivResponses = document.createElement("div");
        newDivResponses.type = "div";
        newDivResponses.id = `responsesOptionsContainer${document.querySelectorAll("#withResponsesOptionsQuestionsContainer input").length + 1}`;

        const newInputResponseOption = document.createElement("input");


        addElement("withResponsesOptionsQuestionsContainer", newLabel);
        addElement("withResponsesOptionsQuestionsContainer", newInput);

        if (document.querySelectorAll("#responsesOptionsContainer input").length === 0){
            const newButton = document.createElement("button");
            newButton.type = "button";
            newButton.name = `addResponseOptionButton`;
            newButton.textContent = `Add Response Option`;
            newButton.className = 'btn btn-dark'
            newButton.id = `addResponseOptionButton`;

            addElement("withResponsesOptionsQuestionsContainer", newButton);
        }
    });

document
    .getElementById("addResponseOptionButton")
    .addEventListener("click", () => {

    })



