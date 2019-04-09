@component('mail::message')
# You have an event coming up

## {{ $event->title }}

### {{ $event->location }}

from {{ date('l jS \\of F Y h:i:s A', strtotime($event->begin_time)) }}
to {{ date('l jS \\of F Y h:i:s A', strtotime($event->end_time)) }}

@component('mail::button', ['url' => $eventUrl])
Go to event page
@endcomponent

See you there!
@endcomponent
