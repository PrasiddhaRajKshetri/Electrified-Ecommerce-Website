function formvalidation() 
		{
			var name = document.forms["form"]["name"]. value;
			var email = document.forms["form"]["email"]. value;

			if (name == "" || email == "")
			{
				alert("Please give full detail before confirming. Thank You!");
			}
		
			else
			{
				alert("Thank You for Subscribing! You will never miss our news update again!");
			}
		}