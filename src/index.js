// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency <= 0) {
		return {};
	}
	if(currency > 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" };
	}
	
	let ans = {};
	let coins = [["H", 50], ["Q", 25], ["D", 10], ["N", 5], ["P", 1]];
	
	let cur_index = 0;
	while(cur_index != coins.length) {
		let erase_money = coins[cur_index][1];
		if(currency >= erase_money) {
			let count = Math.floor(currency / erase_money);
			currency -= count * erase_money;
			ans[coins[cur_index][0]] = count;
		}
		else {
			cur_index++;
		}
	}
	
	return ans;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
