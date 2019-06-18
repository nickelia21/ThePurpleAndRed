# ThePurpleAndRed

ThePurpleAndRed is a private social application for users to connect with eachother and use custom services.
It is an educational platform in development.

<kbd><img src="/app/public/images/front-page.png" /></kbd>

## To Run:
1. Install Meteor
2. Clone this repo
- HTTPS:
```
$ git clone https://github.com/nickelia21/ThePurpleAndRed.git
```
- SSH:
```
$ git clone git@github.com:nickelia21/ThePurpleAndRed.git
```
5. CD into repo directory and then into /app
```
$ cd ../ThePurpleAndRed/app
```
4. Run it bbygrl
```
meteor npm run start
```
3. Connect to the external Mongo DB
- I use MongoDB Compass Community since its easier to connect
    - Hostname: thepurpleandred-drykj.azure.mongodb.net
    - Enable SRV Record
    - Username: guest
    - Password: guest



## Current Features
1. Login and Registration
2. Home Page and Feed
3. Sigma Eats
4. Co-op Database

## Development Features
1. User, logins, and authentication
    - connecting to mongodb
2. User profile picture upload
3. User change info/settings (which ones should they be allowed to edit?)
4. Sigma Eats daily limit - 1?
5. Alumni network (Table of contact information)