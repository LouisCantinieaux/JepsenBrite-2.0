<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        //
        'title' => $faker->sentence(),
        'description' => $faker->text(),
        'location' => $faker->city,
        'image' => $faker->imageUrl(640,480),
        'begin_time' => $faker->dateTimeAD(),
        'end_time' => $faker->dateTimeAD(),
        'creator_id' => factory('App\User')->create()->id,
    ];
});
