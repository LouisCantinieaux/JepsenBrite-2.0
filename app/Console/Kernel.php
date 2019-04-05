<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Mail;
use App\Mail\Reminder;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $participations = \App\Participation::with(['event', 'user'])->where('reminded', 'false')
                ->where('reminder_date', '<', 'NOW()');

            $reminders = $participations->get();
            \Log::info($reminders);
            foreach ($reminders as $reminder) {
                \Log::info($reminder['user']['email']);
                $mail = new Reminder($reminder['event']);
                Mail::to($reminder['user']['email'])->send($mail);
            }
            $participations->update(['reminded' => 'true']);
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
