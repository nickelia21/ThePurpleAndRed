#! /bin/bash
cd
cd METEOR/ThePurpleAndRed/app
RM_FILE="$(pwd)/.meteor/local/db/mongod.lock"
if test -e "$RM_FILE"; then
	rm $RM_FILE
fi
sudo chown -Rh nickelia .meteor/local
meteor npm run start