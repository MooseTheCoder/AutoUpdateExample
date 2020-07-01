# Code auto update example

I wrote this a while back for a friend asking if there was an easier way to get apps to update on appstores.

The idea behind this is that, for hybrid applications, code can be downloaded from a server.

There is a very bare bones example.

## The Stuff

/Client

Standard NPM application, install dependencies with `npm install`

/Server 

Simple php script to serve new files, built using php 7.2, run this via the terminal with PHP installed. `php -S localhost:7000`



Make changes to /Server/files, re run the application and the new code will be executed on the client. This same logic could be applied to apps on the app store. 