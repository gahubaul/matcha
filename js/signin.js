
    function coucou() {
        var login = document.getElementById('login').value;
        var mdp = document.getElementById('mdp').value;
        var mail = document.getElementById('mail').value;

        if (!login) {
            document.getElementById('login_img').src = "../sources/img/error.svg";
            document.getElementById('login_img').title = "Le Login ne peut etre compose que de chiffre et lettre."
        } else
            document.getElementById('login_img').src = "../sources/img/check.svg";
        if (!mdp) {
            document.getElementById('mdp_img').src = "../sources/img/error.svg";
            document.getElementById('mdp_img').title = "Le mots de passe est incompatible";
        } else
            document.getElementById('mdp_img').src = "../sources/img/check.svg";
        if (!mail) {
            document.getElementById('mail_img').src = "../sources/img/error.svg";
            document.getElementById('mail_img').title = "Le mail n'est pas valide";
        } else
            document.getElementById('mail_img').src = "../sources/img/check.svg";
        
        var message = "Inscription Reussie";
        if (!login || !mdp || !mail)
            message = "Champ non rempli";
        


        document.getElementById('confirmation').innerHTML = '<p id="info_message"style="margin:0px;font-size: 1.4em;display: inline-block;padding: 14px;" id="confirmation">'+ message + "</p>";
        if (message == "Inscription Reussie")
            document.getElementById('info_message').style.backgroundColor = "rgba(0, 128, 0, 0.7)";
        else
            document.getElementById('info_message').style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }

    function visible(nb) {
        if (nb == 1)
            document.getElementById('mdp').type = "text";
        if (nb == 0)
            document.getElementById('mdp').type = "password";
    }
