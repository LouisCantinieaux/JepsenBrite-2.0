@component('mail::message')
# Bonjour !

Vous avez été invité à l'évenement : '{{ $currentEvent->title }}' par son créateur, {{ $pseudoCurrentUser }}

@component('mail::button', ['url' => $currentEventUrl])
Link to register to the event
@endcomponent

Adieu<br>

@endcomponent
