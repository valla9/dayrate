let plan_worked = 0
let how_hard = 0
let buffer = 0



function oc(value){
    switch(value){
        case 0:
            plan_worked = 0;
            break;
        case 1:
            plan_worked = 1;
            break;
        case 2:
            plan_worked = 2;
            break;
        case 3:
            how_hard = 0;
            break;
        case 4:
            how_hard = 1;
            break;
        case 5:
            how_hard = 2;
            break;
        case 6:
            buffer = 0;
            break;
        case 7:
            buffer = 1;
            break;
    }
}

function submit(){
        //anmerkung auslesen
        let comment = document.getElementById("input_textarea_comment").value;

        window.location = "/html/submit.php?p=" + plan_worked + "&h=" + how_hard + "$b=" + buffer + "&c=" + comment;
}