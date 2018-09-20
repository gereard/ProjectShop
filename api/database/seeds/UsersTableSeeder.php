<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('users')->insert([
            'name' => str_random(10),
            'email' => 'gvestit@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
