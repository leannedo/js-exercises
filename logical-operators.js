
        let login = prompt("Who are you?", "");
        if (login == "Admin"){
            let password = prompt("Enter password", "");
            if (password == "TheMaster"){
                alert("Welcome");
            }
            else if (passoword == "" || password == null)
            {
                alert("Cancelled");
            }
            else {
                alert("Wrong password");
            }
        }
        else if (login == "" || login == null){
            alert("Cancelled");
        }
        else {
            alert("I dont know you");
        }
