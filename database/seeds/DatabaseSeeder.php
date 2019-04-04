<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // factory(App\User::class, 10)->create();
        factory(App\Event::class, 10)->create();

    	$events = App\Event::all();
    	App\User::all()->each(
    		function ($user) use ($events) { 

		    $user->events()->attach(
		        $events->random(rand(1, 3))->pluck('id')->toArray(),['reminder_date'=>'2019-03-28 08:55:50']
		    );
		     
		});

    }
}
