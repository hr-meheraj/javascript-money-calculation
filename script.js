// select elements
const savingAlert = document.querySelector(".savingAlert");
const remainingBalance = document.querySelector(".remainingBalance");
const income = document.querySelector("#income-value");
//const incomeAlert = document.querySelector(".incomeAlert");
const food = document.querySelector("#food");
const rent = document.querySelector("#rent");
const clothes = document.querySelector("#clothes");
const form = document.querySelector("form");
// Calculation money for a month
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const totalExpenses = document.querySelector("#total-expenses");
    const balance = document.querySelector("#balance");
    const incomeValue = parseFloat(income.value);
    const foodValue = parseFloat(food.value);
    const rentValue = parseFloat(rent.value);
    const clothesValue = parseFloat(clothes.value);
    const totalExpensesValue = foodValue + rentValue + clothesValue;
    const totalBalance = incomeValue - totalExpensesValue;

    // Compare conditional income with totalExpenses
    if (totalExpensesValue > incomeValue) {
        alert("You must less your balance");
        food.value = "";
        rent.value = "";
        clothes.value = "";
    } else {
        balance.innerText = totalBalance;
        totalExpenses.innerText = totalExpensesValue;
    }

    const savingInput = document.querySelector("#savingInput");
    const savingBtn = document.querySelector(".saving-btn");
    savingBtn.addEventListener("click", () => {
        if (savingInput.value == "") {
            alert("you have to filled it");
        } else {
            const savingInputValue = parseFloat(savingInput.value);
            const totalIncome = parseFloat(income.value);
            const totalSavingAmount = (totalIncome / 100) * savingInputValue;
            const savingAmount = document.querySelector(".savingAmount");

            // If user fulfill the form then user can saving his money
            // Saving Section

            if (totalSavingAmount > totalBalance) {
                // if user more saving from his totalBalance then alert this message
                savingInput.classList.add("border-2");
                savingInput.classList.add("border-red-400");
                savingAlert.innerText =
                    "Your Saving Amount must have to less your Total Balance";
                savingInput.value = "";
                savingAmount.innerText = 0;
                remainingBalance.innerText = 0;
            } else {
                // IF your vaid input then main saving is from here
                savingInput.classList.remove("border-2");
                savingInput.classList.remove("border-red-400");
                savingAlert.innerText = "";
                savingAmount.innerText = totalSavingAmount;
                remainingBalance.innerText = totalBalance - totalSavingAmount;
            }
        }
    });
});

// For dynamic footer year
const year = document.querySelector(".year");
year.innerText = new Date().getFullYear();