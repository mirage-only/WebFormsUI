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
        newInput.placeholder = inputPlaceHolder + " (max 45 characters)";
        newInput.maxLength = 45;
        newInput.className = "form-control";
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
        newInput.className = "form-control";
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
        newInput.type = "number";
        newInput.id = `nonNegativeIntegerQuestion${document.querySelectorAll("#nonNegativeIntegerQuestionsContainer input").length + 1}`;
        newInput.className = 'questionInput form-control';
        newInput.min = 0;
        newInput.step = 1;
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        addElement("nonNegativeIntegerQuestionsContainer", newLabel);
        addElement("nonNegativeIntegerQuestionsContainer", newInput);
    });

document
    .getElementById("addWithResponsesOptionsQuestion")
    .addEventListener("click", () => {

        const newDiv = document.createElement("div");
        newDiv.id = `divWithResponsesOptionsQuestion${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}`;

        const newLabel1 = document.createElement("label");
        newLabel1.textContent = `${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1} question with responses options:`;
        newLabel1.classList.add("fw-bold");

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.id = `withResponsesOptionsQuestion${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}`;
        newInput.className = 'questionInput form-control';
        newInput.placeholder = inputPlaceHolder;
        newInput.required = true;

        const newLabel2 = document.createElement("label");
        newLabel2.textContent = 'Response options:';
        newLabel2.classList.add("fw-bold");

        const newInputResponseOption1 = document.createElement("input");
        newInputResponseOption1.type = "text";
        newInputResponseOption1.id=`ResponseOption${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}:1`;
        newInputResponseOption1.className = 'responseOption form-control';
        newInputResponseOption1.required = true;

        const newInputResponseOption2 = document.createElement("input");
        newInputResponseOption2.type = "text";
        newInputResponseOption2.id=`ResponseOption${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}:2`;
        newInputResponseOption2.className = 'responseOption form-control';

        const newInputResponseOption3 = document.createElement("input");
        newInputResponseOption3.type = "text";
        newInputResponseOption3.id=`ResponseOption${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}:3`;
        newInputResponseOption3.className = 'responseOption form-control';

        const newInputResponseOption4 = document.createElement("input");
        newInputResponseOption4.type = "text";
        newInputResponseOption4.id=`ResponseOption${document.querySelectorAll("#withResponsesOptionsQuestionsContainer div").length + 1}:4`;
        newInputResponseOption4.className = 'responseOption form-control';

        addElement("withResponsesOptionsQuestionsContainer", newDiv)
        addElement(newDiv.id, newLabel1);
        addElement(newDiv.id, newInput);
        addElement(newDiv.id, newLabel2);
        addElement(newDiv.id, newInputResponseOption1);
        addElement(newDiv.id, newInputResponseOption2);
        addElement(newDiv.id, newInputResponseOption3);
        addElement(newDiv.id, newInputResponseOption4);

    });



