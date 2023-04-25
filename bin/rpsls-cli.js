#!/usr/bin/env node
import minimist from 'minimist'
import { rpsls } from "../lib/rpsls.js"
const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    helpMessage();
process.exit(0); }

if (args.r || args.rules) {
    rulesMessage();
process.exit(0); }

if (args._) {
    try{
        console.log(JSON.stringify(rpsls(args._[0])));
    }
    catch (error) {
        helpMessage();
        rulesMessage();
        process.exit(1);
    }
}

function rulesMessage() {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n
    \n
    - Scissors CUTS Paper\n
    - Paper COVERS Rock\n
    - Rock SMOOSHES Lizard\n
    - Lizard POISONS Spock\n
    - Spock SMASHES Scissors\n
    - Scissors DECAPITATES Lizard\n
    - Lizard EATS Paper\n
    - Paper DISPROVES Spock\n
    - Spock VAPORIZES Rock\n
    - Rock CRUSHES Scissors`);
}

function helpMessage() {
    console.log(`Usage: node-rpsls [SHOT]\n
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n
    \n
      -h, --help        display this help message and exit\n
      -r, --rules       display the rules and exit\n
      \n
    Examples:\n
      node-rpsls        Return JSON with single player RPSLS result.\n
                        e.g. {"player":"rock"}\n
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
}