+++
date = '2026-03-09T12:27:36-06:00'
draft = false
title = 'All aboout the slop.'
+++

So about 3 months ago I decided, lets try the "vibe coding thing." I want to see what all the fuss was about. I loaded up Claude code and codex and put them to the test. Some things I have observed.

I am building a streaming platform.. Pretty complex. Custom UDP video protocols, custom stream keys per user for tracking and various other per user control.

# Go with codex:
3 iterations of the project with the same results. Slop.
Few vendor packages.

# Rust with Claude:
1 iteration a bit better.
As many crates i could find to throw at it(so it generated as little code as possible)

# Me and The ZIG programming language:
1 iteration (code has no duplicates)
Zig doesn't have mature ecosystem(so i am basically writing everything from scratch)

Doesn't understand separation of domain.
It "sanitizes" and "normalizing" and mutates data so much.
That is builds sanitization functions to normalize its previous sanitization functions.
Multiple files forget it.
It thinks it knows better than you and doesn't listen to instructions.
If you have cargo watch/bun air it wont keep that its context window long enough, You will be having JS/TS all over the place

Lines of code..... LOL
The models don't seem to understand this process. More does not mean better.

I can go on for hours about my gripes.
But at the end of the day I am writing a HTTP protocol and web socket protocol from scratch and i am catching up. 1/4 loc.

I had hope for the AI assistants. I really did. But i dont see how these things could be used for anything more than toy projects.

We see the path ofMicroSlop Windows... All the bugs they have had since 30% of the windows started getting written with AI.

I just hope this same wave of slop code doesn't make it into our medical/aviation software where it WILL cost people their lives.

Dont get me wrong you want to start up a new project. Use an agent get that thing bootstrapped. But beyond that be wary.


Use AI to code expect garbage like this everywhere. 

![slop](/slop.png)
