# JepsenBrite

The job was to take the [application](https://github.com/rabujev/JepsenBrite-2.0) of another group and while fixing some minor bugs, adding new features. Obviously we had to keep the design of the original owner. You can check the original application on this [link](https://jepsen-brite.herokuapp.com/).

The application is still a CRUD Application to manage events online. If you want to know how the new version looks like check it out [here](url de la nouvelle application).

## Built With

* [Laravel](https://laravel.com/docs/5.8) - PHP Framework
* [React](https://reactjs.org/docs/getting-started.html) - JS Framework
* [Postgresql](https://www.postgresql.org/docs/) - Database

## Authors of the modifications

* [**Louis Cantinieaux**](https://github.com/LouisCantinieaux) *(Backend)*
* [**Pauline Roppe**](https://github.com/PaulineRoppe) *(Frontend)*
* [**Lara Loicq**](https://github.com/LaraLcq) *(Frontend)*
* [**Jamal Rabujev**](https://github.com/Rabujev) *(Full Stack)*
* [***Vadim Radermacher*](https://github.com/VadimRadermacher) *(Full Stack)*

## License

No License because we are free

## Getting Started

### Prerequisites
You'll need [composer](https://getcomposer.org/doc/) and [npm](https://www.npmjs.com/get-npm) to download and install all the dependencies.

You need a PostgreSQL database, if you already have one, you can put your credentials in the .env file in the DB_... section.  If you do not have one, you can use [docker](https://www.docker.com/). The docker-compose.yml is given in the root directory.

### Installing

To get a development env running, install all the dependencies with:
```cmd
composer install && npm install
```
Don't forget to edit your .env file. If you do not have one:
```cmd
cp .env.example .env
```
And modify your credentials.
Then generate your jwt key and your app key
```cmd
php artisan key:generate
php artisan jwt:secret
```

If you don't have a PostgreSQL you can start the docker-compose.yml file is included up in the root directory
```cmd
docker-compose up
```
To start your PHP server use the command (*by default the server will start on localhost:8000*):
```cmd
php artisan serve
```
You can specify a port by using
```cmd
php artisan serve --port=8080
```
Or you can simply run the launchscript.sh with:
```cmd
./launchscript.sh
```
If it doesn't work, it probably means you have to set the right to execute it.
```cmd
sudo chmod +x launchscript.sh
```

## Deployment

The project is ready to deploy on heroku (following your setting it will deploy on heroku manually or autommatically), just push this repo to your herokuapp repository.
Add you addon for the database with the following :
```cmd
heroku addons:create heroku-postgresql:hobby-dev
```
Don't forget to edit the configs with:
 * APP_ENV  =  production
 * APP_KEY
 * APP_URL = your url
 * DB_CONNECTION = heroku
 * JWT_SECRET
 * MAIL_PASSWORD
 * MAIL_USERNAME

 And finally run in the console of your heroku app:
 ```cmd
 php artisan migrate:fresh
 ```
to set your database

### POST /register

Only takes a JSON as input.
```json
{
    "name":"yourName",
    "email":"yourEmail",
    "password":"yourPassword"
}
```
Return your token.

### POST /login
Only takes a JSON as input.
```json
{
    "email":"yourEmail",
    "password":"yourPassword"
}
```

### Event object

* *id*: The identifier of the event as an integer.
* *name*: The name of the event.
* *date_event*: The date of the event.
* *street*: The street where the event is taking place.
* *postal_code*: The postal codle where the event is taking place.
* *city*: The city where the event is taking place.
* *price*: The price to participate to the event.
* *country*: The country where the event is taking place. (Can be null)
* *author*: The identifier of the user that created the event.
* *description*: A description of the event.
* *reminder*: A date to know when to send a notification for all the participant at the event.
* *image_url*: A link to the image that you want for the event.
* *media_type*: Can be one of the two following: video or image.


For every route where you have to be logged in, you simply have to add to your request the following header:

```json
{
    'Content-Type': "application/json",
    'Authorization': "Bearer " + "your token"
}
```

### GET /events

Returns a complete list of all the events.

### GET /myEvents
*(must be logged)*
Returns a complete list of all the events you created.

### GET /myParticipation
*(must be logged)*
Returns a complete list of all the events you created.

### GET /pastEvent

Returns a complete list of all the events that are already finished.

### GET /futurEvent

Returns a complete list of all the events that are yet to come.

### GET /event/:id

Returns a event by id.

### PUT /event/:id

*(must be logged and the author of the event)*
Only takes JSON as input.
```json
{
	"name" : "Name of event",
	"date_event" : "YYYY-MM-DD HH:MM:SS",
	"description" : "Your description",
	"reminder" : "YYYY-MM-DD HH:MM:SS",
	"image_url": "url"
}
```
Updates a event.

### POST /event

*(must be logged)*
Only takes JSON as input.
```json
{
	"name" : "Name of event",
	"date_event" : "YYYY-MM-DD HH:MM:SS",
	"description" : "Your description",
	"reminder" : "YYYY-MM-DD HH:MM:SS",
	"image_url": "url"
}
```
Creates a new event.
Returns the newly created event id.

### POST /inscription/:id
*(must be logged)*
*(Id is the id of the event)*
Allows the user to subscribe to an event.

### POST unsubscribe/:id
*(must be logged)*
*(Id is the id of the event)*
Allow the user to unsubscribe to an event.
