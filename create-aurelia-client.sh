if [ -e "client" ]
then
  echo "Client directory already exists! No action taken"
  exit 0
fi

if [ "$1" != "" ] 
then
  echo "Running command: au new"
  echo "Make sure to name the application $1 or this script will fail"

  au new 
  if [ -e $1 ]
  then
    echo "moving $1 to client"
    mv $1 client
  else
    echo "WHAT DID YOU DO? Could not find directory $1 which should be your application directory name"
  fi
else
  echo "Bummer dude"
fi

