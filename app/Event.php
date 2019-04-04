<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use Uuids;
    use SoftDeletes;

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
        'begin_time' => 'datetimetz',
        'end_time' => 'datetimetz'
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
    public function users()
    {
        # code...
        return $this->belongsToMany('App\User', 'participations');
    }
    
}
