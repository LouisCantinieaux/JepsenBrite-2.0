@component('mail::message')
# You have an event coming up<br><br>

## {{ $event->title }}<br>

### {{ $event->location }}<br><br>

from {{ date('l jS \\of F Y H:i', strtotime($event->begin_time)) }} UTC<br>
to {{ date('l jS \\of F Y H:i', strtotime($event->end_time)) }} UTC<br>

(go to event page to see the time in your local timezone)

@component('mail::button', ['url' => $eventUrl])
Go to event page
@endcomponent

See you there!
@endcomponent
