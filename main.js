const budget_total = parseFloat($(".total_budget span").text());
//using this code line above to store our value of 1000 on our page after functions kick in.

$("body").on("keyup keydown keypress change", ".department input", function (e) {
	let running_total = budget_total;

	$(".department input").each(function () {
		let user_input = $(this).val();
		//$(this).val(); means that you are looking for whatever value the user inputs into the field.

		if (user_input === "") {
			return false;
		}
		//the 'if' statement above is used so that when you enter a number in a section while the other sections are blank, then it will still change the budget number up top and not return the NaN on the page.

		user_input = parseFloat(user_input);

		running_total = running_total - user_input;
		//type --> console.log(running_total); to make sure your running_total is correct.
	});

	if (running_total >= 1 && running_total <= 20) {
		$(".total_budget").addClass("warning").removeClass("error");
	} else if (running_total < 1) {
		$(".total_budget").addClass("error").removeClass("warning");
	} else {
		$(".total_budget").removeClass("error warning");
	}
	//This entire block of code starting at the 'if' statement is for CSS and changing the color of the running_total to yellow when the budget hits 20 and red when it hits 0. We use the addClass and removeClass functions so that the colors reset if we make changes in our input fields.

	$(".total_budget span").text(running_total);


});