---
title: The Immutable Golden Image Read-Only File System
slug: immutable-golden-image
date: 2023-02-19 14:00:00
author: Brian Zalewski <brian@megabyte.space>
authorUrl: https://twitter.com/HillBillyHack3r
description: Plans and notes on implementing a read-only file system
featuredImage: /immutable-golden-image.png
featuredImageAlt: The Immutable Golden Image
---

Security experts are talking about reducing the *attack footprint*. The attack footprint basically boils down to all sections of 0s and 1s that are vulnerable to attack. Some people even go as far as basing their code on frameworks that have less code (like Xen with Qubes). However, regardless of how small the attack footprint is, once a successful attack is launched then your system is done. *Poof.* To address this, Megabyte Labs is introducing a new method for ensuring the integrity of parts of the attack footprint by introducing a feature that ensures the integrity of a system by storing the initial state of an operating system on a read-only file system.

## Coming soon..

Be sure to subscribe to our newsletter to be informed about this simple invention.