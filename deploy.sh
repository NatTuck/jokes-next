export HOST=goblin.homework.quest
export USER=jokes

export DIR=$(basename $(pwd))

npm run build
rsync -avz --delete ../"$DIR" $USER@$HOST:~

ssh $USER@$HOST sudo service nginx restart
