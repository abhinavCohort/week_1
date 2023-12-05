/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
//input : array : [{"soap","dailyNeeds",10,1970},{"tel","dailyNeeds",50,1832},{books,"stationary",200,1933}]
//output : according to tests : [{category:"dailyNeeds",totalSpent:60},{category:"stationary",totalSpent:200}]

function calculateTotalSpentByCategory(transactions) {
  let categoryPriceMap = new Map();

  transactions.map((transcObject) => {
    const { category, price } = transcObject;

    const categoryCurrentPrice = categoryPriceMap.get(category) || 0;

    categoryPriceMap.set(category, categoryCurrentPrice + price);
  });
  const expectedResult = Array.from(categoryPriceMap).map(
    ([category, price]) => {
      return { category:category,totalSpent:price };
    }
  );
  return expectedResult;
}

module.exports = calculateTotalSpentByCategory;
