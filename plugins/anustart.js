/**
 * Anustart - Tobias one liners
 *
 * @author		Aaron Bassett
 * @copyright	Aaron Bassett 2013
 */
var sys = require('util');

Plugin = exports.Plugin = function(ph) {
	this.ph = ph;
	this.name = this.ph.name;

	this.title = 'anustart';
	this.version = '0.1';
	this.author = 'Aaron Bassett';

	this.irc = this.ph.irc;

	this.seen = [];

	this.irc.addTrigger(this, 'anustart', this.anustart);

};

Plugin.prototype.anustart = function(msg) {
	var c = msg.arguments[0], // channel
		u = this.irc.user(msg.prefix), // user
        chan = this.irc.channels[c]; // channel object

	var lines = [
		"I'm afraid I just Blue myself",
		" Even if it means me taking a chubby, I will suck it up! ",
		" I'm afraid I prematurely shot my wad on what was supposed to be a dry run if you will, so I'm afraid I have something of a mess on my hands. ",
		"I wouldn't mind kissing that man between the cheeks. ",
		" Tobias... you blow hard!  ",
		" Michael, you really are quite the cupid. You can sink your arrow into my buttocks any time. ",
		" I've been in the film business for a while but I just cant seem to get one in the can.",
		"Come on. Let's see some bananas and nuts. Oh, perhaps we should just pull their pants off. ",
		" So fill each one of these bags with some glitter, my photo resume, some candy, and a note. ",
		" You're forgetting, Lindsay, that as a psychiatrist, I was a professional twice over - an analyst and a therapist. The world's first \"analrapist\"",
		" So Ann, the question is, do you want a man or a boy? I know how I would answer. "
	];

	var item = lines[Math.floor(Math.random()*lines.length)];
	chan.send(item);
};
