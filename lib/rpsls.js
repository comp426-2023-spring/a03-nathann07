

export function rps(shot) {
    if (shot === undefined) {
        return {player:'rock'};
    }
    else if(shot == "rock") {
        return {player:'rock',opponent:'rock',result:'tie'}
    }
    else if(shot == "paper") {
        return {player:'paper',opponent:'rock',result:'win'}
    }
    else if(shot == "scissors") {
        return {player:'scissors',opponent:'rock',result:'lose'}
    }
    else {
        console.error(shot + ' is out of range.');
        throw new Error;
    }
}

export function rpsls(shot) {
    if (shot === undefined) {
        return {player:'rock'};
    }
    else if(shot == "rock") {
        return {player:'rock',opponent:'rock',result:'tie'}
    }
    else if(shot == "paper") {
        return {player:'paper',opponent:'rock',result:'win'}
    }
    else if(shot == "scissors") {
        return {player:'scissors',opponent:'rock',result:'lose'}
    }
}