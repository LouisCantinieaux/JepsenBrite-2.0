<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Auth;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $params = $request->all();
        $params['creator_id'] = Auth::user()->id;
        $event = \App\Event::create($params);
        $event['creator'] = $event->creator()->get()[0];
        return response()->json($event, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     * Coucou Sam, on s'ammuse bien ^^
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $eventWithDeleted)
    {
        //\Log::info($eventWithDeleted);
        $event = $eventWithDeleted;
        $event['participants'] = $event->users()->get(['users.id','name']);
        foreach ($event['participants'] as $participant) {
            unset($participant['pivot']);
        }

        return response()->json($event, 200);
    }

    public function showAll(Request $request)
    {
        $max = 20;
        $events = Event::orderBy('end_time')->orderBy('begin_time');
        if($from = $request->input('from', false)){
            $events->where('end_time', '>=', $from);
        }
        if($to = $request->input('to', false)){
            $events->where('begin_time', '<=', $to);
        }
        $number = $request->input('number', $max);
        $number = $number > $max ? $max : $number;
        $offset = $request->input('offset', 0);

        $events->skip($offset)->take($number);

        return response()->json($events->get(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $event->update($request->all());
        return $event;
    }

    /**
     * Cancels the event.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function cancel(Request $request, Event $event)
    {
        \Log::info($event);
        $event->delete();
        return response()->json(['message' => 'event has been canceled.']);
    }
}
