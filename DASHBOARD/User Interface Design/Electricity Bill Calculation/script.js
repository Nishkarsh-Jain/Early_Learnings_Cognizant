function ebBill(unitsConsumed){
	//fill the code
	var bill=0;
	if(unitsConsumed<=100)
	return 0;
	else if(unitsConsumed<=300)
	{bill=1.5*unitsConsumed-1.5*100;
	return bill;
	}
	else if(unitsConsumed<=600)
	{bill=3.5*unitsConsumed-3.5*100; 
	return bill;
	}
	else if(unitsConsumed<=1000)
	{bill=5.5*unitsConsumed-5.5*100;
	return bill;
	}
	bill=7.5*unitsConsumed-7.5*100;
	return bill;
	
}