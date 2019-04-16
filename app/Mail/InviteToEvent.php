<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Event;


class InviteToEvent extends Mailable
{
    use Queueable, SerializesModels;

    public $pseudoCurrentUser;
    public $currentEvent;
    public $currentEventUrl;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($currentEvent, $pseudoCurrentUser)
    {
        $this->currentEvent = $currentEvent;
        $this->pseudoCurrentUser = $pseudoCurrentUser;
        $currentEvent_id = $currentEvent->id;
        // $this->currentEventUrl = 'https://jepsenbrite.herokuapp.com/event/'.$currentEvent_id;
        $this->currentEventUrl = 'http://localhost:8000/event/'.$currentEvent_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('InviteToEvent')->subject("JepsenBrite : you were invited to one of your friends' event !");
    }
}
