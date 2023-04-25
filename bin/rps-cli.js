#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from "../lib/rpsls.js"
import { rpsls } from "../lib/rpsls.js"
const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
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
process.exit(0); }
if (args._) {
    rps(args._);
}