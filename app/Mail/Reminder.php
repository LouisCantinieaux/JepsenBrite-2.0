<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Event;

class Reminder extends Mailable
{
    use Queueable, SerializesModels;

    public $event;
    public $eventUrl;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Event $event)
    {
        $this->event = $event;
        $this->eventUrl = 'https://jepsenbrite.herokuapp.com/events/'.$event['id'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Reminder')->subject('JepsenBrite reminder: you have an event coming up!');
    }
}
