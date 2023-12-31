<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Post::factory(20)->create();

        User::find(1)->update([
            'name' => 'Hristijan',
            'email' => 'kiko@test.com',
            'password' => '1234qwer'
        ]);

        Post::find(3)->update([
            'user_id' => '1'
        ]);
    }
}
