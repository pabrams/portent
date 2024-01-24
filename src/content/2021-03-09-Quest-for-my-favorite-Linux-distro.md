---
slug: "/quest-for-the-perfect-linux-distro"
date-created: "2021-03-09"
title: "My quest for the perfect linux distribution"
---

I've used Linux before, on my home PC, but always dual booting. This is the first time I've removed Windows completely. In the distant past, like the late nineties and early aughts, I'd tried RedHat, Fedora, Mint, Suse, Slackware and Corel linux, but although I enjoyed working with Linux, it never gained traction as my daily O/S, mainly because I was a gamer, and in those days, computer games ran on Windows. I still dabbled with Linux, trying some new operating systems such as Ubuntu, but I never did more than dabble.

In recent years, though, things have changed dramatically.There is a large number, and still growing, of Steam games that will run natively on Linux. Many of the ones that don't will run with the help of software such as Proton. It was time for me to try again.

This time around, I tried the following distros, in the order shown:
 - MX Linux
 - PoP!
 - Manjaro
 - Mint
 - Redhat
 - Ubuntu
 - Arch
 - Endeavour
 - Nix
 - Fedora Silverblue
 - Fedora with KDE and Wayland
 - Void

I didn't give MX Linux much of a chance, really. At the time, the hot new thing was PoP!_OS, and it was touted as a good OS for developers and gamers, which were my two main roles. I quickly succumbed to the hype and installed it.

I really enjoyed Pop for a while, and probably would have stayed on it if I hadn't run into serious issues which forced me to re-install several times. It seemed like every time I updated the O/S, it broke my system, forcing me to reinstall and reconfigure. I couldn't identify the source of the problem. The first time, I suspected it was the graphical package manager that was screwing things up, so I stopped using it. The next time the machine pooched, it seemed like the problem was the encryption didn't play welll with my BIOS, so I stopped encrypting my drives. Then, I thought it was my old Nvidia card (a GeForce 1070). Finally, I concluded that the problem was UEFI.

It probably didn't matter very much why it was happening, but it was clear to me I had to try something else. The Arch-based Manjaro was also recommended for developers and gamers, so it was next.

Manjaro didn't last long with me because I found the vomit-inducing shades of green that formed the default color scheme intolerable, and I had a very difficult time changing them, probably because I was accustomed to the KDE desktop environment, and wasn't using that.

So I continued hopping, burning quickly through Mint, Redhat and Ubuntu. Mint and Ubuntu worked okay, but I guess I simply found them too boring. Redhat caused issues similar to what I'd seen with Pop, which manifested as some werid dependency issues and some kind of version hell whenever I used RPM, the package manager.

By this time, having wasted so much time configuring software only to blow it all away again and again, I was reading a lot about configuration management using dotfiles. I decided that I wanted to start with a bare system, and install only what I needed, keeping track of all my coniguration, so that I could repeat the configuration in a fraction of the time, if needed. This is what landed me on Arch. I had fun configuring Arch and finding and installing the packages I wanted, and I thought I'd found my distro. But then, I had a large upgrade that bricked my system (again).

Then I found Endeavour. This OS's installer, Calamares, made a good impression on me, and I stayed with Endeavour for quite a while. When it did crash, I still wished I had an easier way at No.1 on most severything. Finally, I noticed NixOs, which, although not new, was experiencing a surge in popularity. The idea of immutability very much appealed to me. Unfortunately, I didn't find it very enjoyable to configure the thing, and I reluctantly acknowledged that I wasn't interested in spending the time necessary, just then. So I switched to Fedora Silverblue, or rather its KDE-accompanied counterpart. I still found the idea of immutability appealing in theory, but not in practice, very quickly realizing I didn't want to take the time to figure out how to install things with it. So I write to you know from VS Code installed on an instance of Fedora, with KDE and Wayland. It's pretty good, but it freezes every once in a while, forcing a hard reboot. I plan on trying Void very soon, which is the flavor of the month, sitting at No.1 on most s"best distro" lists. I'm also thinking about giving NixOs another chance. I've also been thinking about trying Gentoo.

When it did crash, I still wished things were easier to set up, but I reluctantly acknowledged that I wasn't interested in spending the time necessary, just then. So then I switched to Fedora Kinoite (Silverblue with KDE instead of Gnome).