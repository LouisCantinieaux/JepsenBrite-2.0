<?php

namespace App\Http\Controllers;

use Auth;
use App\Participation;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;

class ParticipationController extends Controller
{


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(\App\Event $event, Request $request)
    {
        //
        $eventId = $event->id;
        $params = $request->all();
        $params['event_id'] = $eventId;
        $params['user_id'] = Auth::user()->id;
        \Log::info($params);
        try{
            $participation = \App\Participation::create($params);
            \Log::info($participation);
        } catch(QueryException $e) {
            return response()->json(['error' => 'already registered', 'event_id' => $eventId], 400);
        }



        return response()->json(['message' => "registered successfully to event", 'event_id' => $eventId], 200);
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
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function show(Participation $participation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function edit(Participation $participation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Participation $participation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Participation  $participation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Participation $participation)
    {
        //
    }
}
