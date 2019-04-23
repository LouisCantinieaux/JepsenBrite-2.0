@component('mail::message')

# Welcome to JepsenBrite !

##{{ $pseudoCurrentUser }} invites you at the '{{ $currentEvent->title }}' event.
![picture of event](http://example.com/images/example.png)

If you want to participate in this event, please click on the following link :
{link of event}

We hope to count you among the next participants in our events
See you soon !

{logo of the website with link to the site}


@component('mail::button', ['url' => $currentEventUrl])
Link to register to the event
@endcomponent

Adieu<br>

@endcomponent
