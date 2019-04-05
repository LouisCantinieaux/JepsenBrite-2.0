<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Participation extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'event_id', 'reminder_date'
    ];

    protected $attributes = [
        'reminded' => 'false'
    ];



    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'reminder_date' => 'datetime',
    ];

    public function event()
    {
        return $this->belongsTo('App\Event', 'event_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
