console.log(`


----- Exercise 15 - Max Stock Profit -----


`);

// code
const maxStockProfit = pricesArr => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
			buyPrice = pricesArr[i];
		}
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

// test
firstArr15 = [10, 18, 4, 5, 9, 6, 16, 12];
secondArr15 = [32, 46, 26, 38, 40, 48, 42];

console.log("firstArr15 -> ", maxStockProfit(firstArr15));
console.log("secondArr15 -> ", maxStockProfit(secondArr15));