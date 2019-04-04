<?php

use Faker\Generator as Faker;

$factory->define(App\Participation::class, function (Faker $faker) {
    return [
        //
        'reminder_date'=>$faker->dateTimeAD(),
    ];
});
