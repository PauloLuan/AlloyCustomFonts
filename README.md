Based on [Alloy Custom Fonts Project](https://github.com/applification/Alloy-Custom-Fonts).

# Key points: 

	1. Place your custom font in app / assets folder
	2. Ensure you have an Info.plist file in the root of your project, and create an entry with the filename of your custom font
	3. In your .tss style sheet file add the following the element with your text in: font: {fontSize: 24, fontFamily: "Lobster 1.3"}

# How to run

This repo uses [Titanium Appcelerator Alloy](https://github.com/appcelerator/alloy). If you are new to Alloy head over to the [docs on Github](https://github.com/appcelerator/alloy/tree/master/docs) to get up to speed.

If you don't have NodeJS installed on your computer, install [nvm](https://github.com/creationix/nvm) to switch between NodeJS versions.

	curl https://raw.github.com/creationix/nvm/master/install.sh | sh

The Titanium CLI requires [Node.js 0.8.x](http://nodejs.org/dist/). You can
download Node.js 0.10.x, but only Titanium SDK 3.1.0 and later will work.

	nvm install v0.10.22 && nvm use v0.10.22


## Prerequisites


Install [Titanium](https://github.com/appcelerator/titanium/):

    [sudo] npm install -g titanium


Install [Alloy](https://github.com/appcelerator/alloy):

    [sudo] npm install -g alloy

## Obtaining a Titanium SDK

You will need to download a Titanium SDK 3.0 or newer:

    # stable release (recommended)
    titanium sdk install 3.1.2.GA --default

## Setting up the Titanium CLI

Before you begin using the Titanium CLI, you should configure it by running the
"setup" command:

    titanium setup

It will prompt you with a number of questions such as your e-mail address (for logging into the Appcelerator Network), the location of your Android SDK, and so on.

finally, run the application! :D

	ti build -p iphone # Mac

or

	ti build -p android # Others


----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2013 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.

