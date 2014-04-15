# DirektSPEED - EGGDROP for NODEJS


This is based on the Work of Varius Contributors we Forked the Most current version from the most trusted user and now start porting it to be like eggdrop and add the features you where missing in eggdrop and we will also re add the TCL support to it and a fully working dcc xdcc chat and all the IRC RFC Stuff your wishing 

we saw that in the past years no one did it so i feel in the NEED to do it i am part of the old eggheads EGGDROP IRC BOT Coder Team and will now bring it back to Live maintained by my Company Directly on GitHub 4 Free !!!!!


This is for all the Eggdrop lovers like me and our needs on Freenode in #docker and #node.js as #shipyard




# Old README Left till clean up 

NodeJS IRC Bot
==============
This is a plugin-based IRC Bot written in NodeJS 
and maintained by [Karl Tiedt](http://twitter.com/ktiedt).
Originally written by [Michael Owens](http://www.michaelowens.nl).

Prerequisites
=============
* NodeJS (tested under v0.8.17)

How to run
==========
Install all dependencies of the bot using 

    npm install

Modify your configuration in config/config.json and start your bot with the following command:

    node bot.js

Or create a new config file (e.g. test.json) in the config directory and start your bot with the 
following command:

    node bot.js --config=test    

The bot will now attempt to connect. Raise the logLevel (see config/config.json) to see incoming/outgoing packets.
We are using [winston](https://npmjs.org/package/winston) as a log framework, the log levels used right now are
error, info and verbose (following the npm log levels).  

*** Originally written by [Michael Owens](http://www.michaelowens.nl).
