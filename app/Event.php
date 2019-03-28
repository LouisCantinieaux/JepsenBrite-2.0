<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use Uuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'creator_id', 'begin_time', 'end_time', 'image', 'location'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'begin_time' => 'datetime',
        'end_time' => 'datetime'
    ];

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    public function creator(){
        return $this->belongsTo('App\User', 'creator_id');
    }
}
