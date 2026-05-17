---
title: "I use NixOS... BTW"
date: 2026-05-17T12:00:00-06:00
draft: false
tags: ["origin story", "personal", "computers", "NixOS", "Linux", "LoveOfTheGame" ]
categories: ["Blog"]
---
![l33t NixOS](/nixos.jpg)

'95 was an amazing summer. Before starting my 8th grade year of junior high, I was given what felt like an early graduation gift: the internet.

Man, I was excited.

I had already been exposed to computers at friends’ houses for years — things like Slackware and IRC (Internet Relay Chat). Back then, the internet still felt underground. You had to _want_ to learn it.

I’ve been using Linux in one form or another since around 1995. I didn’t really start daily driving it on the desktop until much later though. Windows still owned gaming, hardware support was rough, and there were always those stupid “Windows-only” devices — printers, mice, scanners, random drivers, you name it.

And honestly? Linux desktop setup back then was not for the faint of heart.

If you remember configuring `xorg.conf`, you already know the pain. Getting your monitor, resolution, refresh rate, and desktop environment working sometimes felt harder than installing the operating system itself.

Then came Ubuntu in 2004.

By that point I had already tried all kinds of Linux distros, but nothing really stuck as a desktop operating system. Was 2004 finally the “Year of the Linux Desktop”?

For me, not quite.

See, 2004 was also the year World of Warcraft launched, and that game consumed years of my life.

Sure, Linux had Wine. You could pay for something like CrossOver or spend hours tinkering your way through compatibility issues. But there was nothing close to the seamless experience Linux gamers have today with Proton.

Linux became my “everyday use” operating system long before it became my true daily driver.

By the late 2000s, I was making serious attempts to move over full-time. Linux was always there in the background, but gaming kept pulling me back into Windows. Professionally, I had also moved deeper into the Apple ecosystem for work.

Then a few years later came Pop!_OS.

When Pop!_OS released in 2017, something clicked in my head:  
“I can actually do this now.”

Lutris had matured, Linux gaming compatibility was improving fast, and shortly afterward Valve released Proton. That changed everything.

For the first time in my life, Linux didn’t feel like a compromise for PC gaming anymore.

Ubuntu and Debian-based distributions were great, but eventually I wanted something with more aggressive packaging and newer software. So I started distro hopping again — Arch, OpenSUSE, Mint — before eventually settling on Fedora Linux for a few years.

Fedora was fantastic.

Until I bricked it.

Multiple times.

Around then I kept hearing people talk about NixOS. I remember thinking:  
“There’s no way people are actually daily driving this thing.”

It looked insanely complicated.

At that point I had already been using Fedora for years, but after breaking my system one final time I figured:  
Why not give NixOS a shot?

What I found was completely different from every Linux distribution I had used before.

NixOS treats the operating system almost like source code. Instead of manually tweaking a machine over time and hoping nothing breaks, you define your system configuration declaratively and rebuild it from configuration files.

Need to roll back after a bad update?  
Reboot.

Need identical development environments across multiple machines?  
Done.

Need multiple versions of the same package installed simultaneously?  
No problem.

The deeper I got into it, the more I realized NixOS wasn’t just another Linux distro. It was a different philosophy entirely.

And after nearly 30 years of using Linux, it’s probably the closest thing I’ve found to a desktop operating system that actually feels engineered for developers first.

This will be the first in a series of blogs about NixOS and the broader Nix ecosystem. I want to cover how NixOS — both as an operating system and as a package manager — has completely changed the way I approach development workflows, not just on Linux, but on macOS and Windows as well.

There are a lot of great YouTube videos introducing NixOS, but I want to go deeper into real-world systems and daily use: reproducible development environments, gaming setups, infrastructure, shells, CI/CD pipelines, cross-platform tooling, and how Nix changes the way you think about software itself.

I genuinely believe Nix belongs in the modern software development conversation in a much bigger way than it currently does. Once you start building fully reproducible environments and treating your workstation like code, it becomes very hard to go back.

I’m looking forward to digging deeper into these topics in future posts.


-- John
