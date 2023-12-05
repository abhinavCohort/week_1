/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
interface transcInterface {
  itemName: string;
  category: string;
  price: number;
  timestamp: number;
}
interface resultInterface {
  category:string
  totalSpent:number
}
function calculateTotalSpentByCategory<T extends transcInterface>(
  transactions: T[]
): resultInterface[] {
  let categoryPriceMap = new Map<string, number>();

  transactions.map((transcObject) => {
    const { category, price } = transcObject;

    const categoryCurrentPrice = categoryPriceMap.get(category) || 0;

    categoryPriceMap.set(category, categoryCurrentPrice + price);
  });
  const expectedResult: resultInterface[] = Array.from(categoryPriceMap).map(
    ([category, price]) => {
      return { category: category,totalSpent:price };
    }
  );
  return expectedResult;
}


module.exports = calculateTotalSpentByCategory;
