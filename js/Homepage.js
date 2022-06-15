function openSearchBar(){
    document.getElementById("search_bar").style.visibility = "visible";
}

function turnOffSearchBar(){
    document.getElementById("search_bar").style.visibility = "hidden";
}

function searchRun(){
   let searchValue = document.getElementById("search_bar").value;
    console.log(searchValue);
    if (searchValue === "Luffy"){
        location.href= "#captain_Luffy";

    }
    else if(searchValue === "Zoro" ||searchValue === "Sanji" || searchValue === "Yamato" ){
        location.href= "#captain_right_hand";
    }

    else if(searchValue === "Jinbei" ||searchValue === "Usopp" || searchValue === "Robin" ){
        location.href= "#ship_Driver";
    }

    else if(searchValue === "Franky" ||searchValue === "Nami" || searchValue === "Brook" ){
        location.href= "#ship_Maintainer";
    }

    else if(searchValue === "Chopper"){
        location.href= "#ship_Doctor";
    }

    else{
        window.scrollTo(0, 0);
    }
}

searchRun();

