function OrderCake(str) {
	//fill the code
	var weight=str.substring(0,4);
	var choice=str.substring(4, str.length-3);
	var id=str.substring(str.length-3);
	weight=weight/1000;
	var weight_Kg=Math.round(weight);
	var price=Math.round(weight*450);
	var ans="Your order for "+weight_Kg+" kg "+choice+" cake has been taken. You are requested to pay Rs. " +price+" on the order no "+id;
	return ans;
}
