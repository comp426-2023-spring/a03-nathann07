#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from "../lib/rpsls.js"
const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    helpMessage();
process.exit(0); }

if (args.r || args.rules) {
    rulesMessage();
process.exit(0); }

if (args._) {
    try{
        console.log(JSON.stringify(rps(args._[0])));
    }
    catch (error) {
        helpMessage();
        rulesMessage();
        process.exit(1);
    }
}

function rulesMessage() {
    console.log(`Rules for Rock Paper Scissors:\n
    \n
        - Scissors CUTS Paper\n
        - Paper COVERS Rock\n
        - Rock CRUSHES Scissors`);
}

function helpMessage() {
    console.log(`Usage: node-rps [SHOT]\n
    Play Rock Paper Scissors (RPS)\n
    \n
      -h, --help      display this help message and exit\n
      -r, --rules     display the rules and exit\n
    \n
    Examples:\n
      node-rps        Return JSON with single player RPS result.\n
                      e.g. {"player":"rock"}\n
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}