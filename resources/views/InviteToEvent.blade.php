@component('mail::message')

# Welcome to JepsenBrite !

##{{ $pseudoCurrentUser }} invites you to the '{{ $currentEvent->title }}' event.
![picture of event](http://example.com/images/example.png)

If you want to participate in this event, please click on the following link :
@component('mail::button', ['url' => $currentEventUrl])
Link to register to the event
@endcomponent

We hope to count you among the next participants in our events<br>
See you soon !

{logo of the website with link to the website}


@endcomponent
