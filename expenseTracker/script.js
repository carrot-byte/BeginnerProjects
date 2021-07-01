const expenseInput = document.querySelector(".expenseInput");
const expenseDate = document.querySelector(".expenseDate");
const expenseAmount = document.querySelector(".expenseAmount"); 
const tableBody = document.querySelector(".tableBody"); 
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", addExpense);

const noExpense = document.createElement("tr");
noExpense.classList.add("noExpense");

const noExpenseData = document.createElement("td");
noExpenseData.classList.add("noExpenseData");
noExpenseData.innerHTML = "No expense added yet!";
noExpenseData.colSpan = "3";
noExpense.appendChild(noExpenseData);

tableBody.appendChild(noExpense);


function addExpense(event){
    event.preventDefault();

    if(tableBody.childNodes[0].classList == "noExpense"){
        tableBody.removeChild(noExpense);       // when you are removing a child, you are only removing that element's existence from everywhere. you can later use that element by appending it.
    }

    const expenseRow = document.createElement("tr");
    expenseRow.classList.add("expenseRow");

    const addedName = document.createElement("td");
    addedName.classList.add("addedName");
    addedName.innerHTML = expenseInput.value;
    expenseRow.appendChild(addedName);
    expenseInput.value = "";

    const addedDate = document.createElement("td");
    addedDate.classList.add("addedDate");
    addedDate.innerHTML = expenseDate.value;
    expenseRow.appendChild(addedDate);
    expenseDate.value = "";

    const addedAmount = document.createElement("td");
    addedAmount.classList.add("addedAmount");
    addedAmount.innerHTML = "৳" + expenseAmount.value;
    expenseRow.appendChild(addedAmount);
    expenseAmount.value = "";

    const crossBtn = document.createElement("button");
    crossBtn.classList.add("crossBtn");
    crossBtn.innerHTML = "x";
    addedAmount.appendChild(crossBtn);
    
    tableBody.appendChild(expenseRow);
    expenseRow.scrollIntoView();

    crossBtn.addEventListener("click", deleteRow); // you can't point to it outside the function

    function deleteRow(){
        expenseRow.classList.add("fade");
        expenseRow.addEventListener("transitionend", function(){
            expenseRow.remove();
            if(tableBody.childNodes.length === 0){
                tableBody.appendChild(noExpense);
            }
        })
    }
}

// console.log(tableBody.childNodes);



