---
title: "Software for Love of the Game"
date: 2026-08-11T12:00:00-06:00
draft: false
tags: ["irc", "mirc", "personal", "origin story", "90s"]
categories: ["Blog"]
---

*From passion, to hacking, to engineer.*

![A 90s desk: Compaq CRT running mIRC, a script editor, a 56k modem, and a stack of floppies](/mirc-desk.png)

---

I have always loved computers. Tinkering with them. Breaking them. Fixing them. Tearing them apart.

I look back at the early years of my journey into programming and realize how much they helped lay the foundation for my career. At the time, I wasn't thinking about a career. I wasn't thinking about software engineering, architecture, or where any of this would eventually take me.

I just loved computers and wanted to understand how they worked.

---

# IRC: The Bedrock

When I saw people using terminal applications in the '80s as a kid, I was in awe. How the heck did they make that beautiful thing? How does it work? What are all these different commands doing?

I pretty much knew that this was what I wanted to build: complex systems where all these different pieces somehow worked together.

I got my first computer in the early '90s and immediately dove in. I've written more about that part of the story [here](/posts/origin-story/).

By the mid-'90s, I had started learning how to write mIRC scripts.

The colors, the elegance, the utility of the client—and especially the camaraderie of the IRC community—pulled me in. I became obsessed with writing the best mIRC script I possibly could.

There were rivalries, friendships, and a real sense of companionship. Some of those friendships have lasted my entire adult life. There are people I met on IRC nearly 30 years ago who I still talk to today.

We were living on the edge of this new Internet society: IRC channels, networks, bots, scripts, file sharing, beautiful ANSI art, and people building things simply because they thought they were cool.

Some amazing software came out of that scene.

I remember when Napster—and Napster was an IRC nickname before it was a product—was asking people to test his new music-sharing application. I said sure.

I installed it, loaded it up, and... honestly, it wasn't very impressive.

Napster hadn't hit the public yet. It was still beta-quality software, and the network only had a couple hundred people on it at most. To me, it looked like a strange combination of an IRC-style client, file sharing, and a modified IRC server behind it.

I remember thinking to myself:

> *This knockoff IRC client with a modified IRCd is never going to make it.*

Yeah.

I might have been a little wrong about that one.

And then there were the countless hours of TetriNET we played...

## Learning to Program Without a Safety Net

mIRC scripting was an interpreted language, and compared to what we have today, it was incredibly crude. There was no package ecosystem. No libraries to pull in. No Stack Overflow. No GitHub. No AI to explain why your code was broken.

mIRC didn't even have real arrays.

If you wanted something that acted like an array, you did strange things like this:

```text
%var [ $+ [ %i ] ] = blah
```

You dynamically constructed variable names and made it work.

That was programming.

More importantly, we lived in a world where documentation wasn't always a Google search away. If you wanted to learn how somebody did something, you read their code. You downloaded somebody's script, opened it up, tore it apart, changed things, broke things, and figured out why they worked.

Looking back, that was probably one of the best ways I could have learned.

mIRC scripting was primitive, but it taught me variables, conditionals, loops, events, functions, state, sockets, and how to break a problem into smaller pieces. I didn't know all the formal terminology yet. I just knew I wanted to make something work.

I got good enough at it that I was even allowed to teach a few lessons in my high school's BASIC programming class.

Thanks, Miss Van Hulst. An awesome woman with a thick German accent who let an overly enthusiastic kid take over her programming class for a little while.

---

## MTV: The Original Streaming Platform

Here's one I still think about.

At some point MTV—MTV2, in my memory—decided to put a live IRC channel on television. Actual chat. Actual scrollback. Running on air, next to the videos.

Think about what that actually was. This is before Twitch chat. Before YouTube Live. Before anybody had said the word "streamer" out loud. A broadcast network piping a live, unfiltered, real-time text feed from the open Internet onto television screens in people's living rooms.

That's the streaming platform chat box. Shipped about fifteen years early.

It lasted maybe a month.

Because here's the question nobody over there seems to have asked: *who owns the nicknames?*

On EFnet in the '90s the answer was nobody. There was no NickServ. No ChanServ. No registration, no ownership, no recovery. A nickname belonged to whoever was holding it at that moment, and a channel belonged to whoever currently had ops. That was the whole security model. DALnet had already forked off Undernet in the summer of '94 specifically to add better user and channel protections, and the services that let you actually own a nick got written in early '95—but if you were sitting on EFnet, none of that existed. You were on your own.

So the scene did what the scene does.

Both of the classic attacks were built out of netsplits—what happens when servers in the network lose sight of each other and the user list tears in half. Ride a split into a channel that looks empty from your side and you *recreate* that channel, which means you come back as an operator. Servers heal, the network merges, and now you have ops in a channel nobody gave you.

The other one was cleaner. Take somebody's nick on the far side of a split, wait for the servers to rejoin, and the collision knocks you both off the network. Then you just reconnect faster than they do and become them.

None of this was exotic or clever. Channel takeovers were a daily occurrence. It was ambient. It was a Tuesday.

Now point a television camera at it.

The real fix took years, and it wasn't clever either—it was structural. Timestamping. Every channel and nick carries a creation time, so when a split heals the older one wins and the newer side's ops get stripped. Undernet shipped that in November 2000. Years too late to save anybody's TV show.

I've never been able to turn up a recording, or much of anything else. That era mostly didn't get archived. So this one lives in my head and in the heads of whoever else was watching.

But I think about it constantly now, because every realtime feature is the same bet. You're putting a channel between strangers and an audience and trusting that the identity layer holds. MTV made that bet on a protocol that didn't have an identity layer at all.

They were right about the format. Everybody watches chat next to video now.

They just built it on EFnet.

---

## A Few Things From Our Corner of the Internet

These aren't meant to be a complete history of the scene. They're just a few pieces of software that remind me of that era and the people around it.

### Napster

[![Napster](/napster.webp)](https://en.wikipedia.org/wiki/Napster)

**[Napster](https://en.wikipedia.org/wiki/Napster)** — One of the defining pieces of software of the early file-sharing era, and one I got to see when it was still just a small beta with a few hundred people using it.

### Cobalt Strike

**[Cobalt Strike](https://www.cobaltstrike.com/)** — Raphael Mudge's adversary-simulation and red-team platform. Another project with roots in the hacker and security communities that grew into something far larger than its beginnings.

### TetriNET

[![TetriNET](/tetrinet.png)](https://en.wikipedia.org/wiki/TetriNET)

**[TetriNET](https://en.wikipedia.org/wiki/TetriNET)** — Multiplayer Tetris over the Internet. Rivalries, IRC friends, and an unreasonable number of hours spent trying to ruin everyone else's board.

---

None of us were building a career. There was no plan. Nobody was optimizing a portfolio or picking a stack that would look good in an interview. We were kids with modems who thought this stuff was cool, and we tore it apart because we wanted to know how it worked.

That turned out to be the whole thing.

Everything I do now for a living—the architecture, the runtimes, the systems that have to hold up under real traffic—comes straight out of that. Not the mIRC syntax. The habit. Open it up, break it, figure out why it broke, put it back together better. Read somebody else's code because that's how you learn what good looks like. Ship the thing.

The tools got better. The tools got *so much* better. But the reason hasn't changed in thirty years.

Still for love of the game.

**— John Janes**
