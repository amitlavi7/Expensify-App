export default (expenses) => {
    const amountsArray = expenses.map((expense) => expense.amount);
    return amountsArray.reduce((amount, cur) => amount + cur , 0)
}