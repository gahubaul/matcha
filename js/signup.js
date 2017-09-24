    function coucou() {
        var login = document.getElementById('login').value;
        var mdp = document.getElementById('mdp').value;

        if (!login) {
            document.getElementById('login_img').src = "../sources/img/error.svg";
            document.getElementById('login_img').title = "Le Login ne peut etre compose que de chiffre et lettre."
        } else
            document.getElementById('login_img').src = "../sources/img/check.svg";
        if (!mdp) {
            document.getElementById('mdp_img').src = "../sources/img/error.svg";
            document.getElementById('mdp_img').title = "Les mots de passe ne sont pas identiques";
        } else
            document.getElementById('mdp_img').src = "../sources/img/check.svg";
    }

    function visible(nb) {
        if (nb == 1)
            document.getElementById('mdp').type = "text";
        if (nb == 0)
            document.getElementById('mdp').type = "password";
    }