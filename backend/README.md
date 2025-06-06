# Fashion project With Laravel 11 Api

## To Run This Project Follow the following instructions

## Installation guide
* clone the repository
```
git clone git@github.com:Mohamedshaban101/Fashion.git
```
* Install composer dependencies by running composer install
```
composer install
```
* Go to localhost/phpmyadmin and create database called fashion
  
* Go to .env file
```
DB_DATABASE=fashion
```
* run this code to migrate the tables
```
php artisan migrate
```
* install jwt-auth
```
composer require tymon/jwt-auth

php artisan vendor:publish --provider="Tymon/JWTAuth/Providers/LaravelServiceProvider"

php artisan jwt:secret
```
* install laravel socialite
  
    - Google Socialite
    - Github Socialite
```
composer require laravel socialite
```
* install stripe
```
composer require stripe/stripe-php
```
* install vonage sms
```
composer require vonage/client
```
## Features
* Login

    ![Image](https://github.com/user-attachments/assets/ab2084c1-33e1-4872-92e2-aa705dae6638)
  
* Home Page
  
  ![Image](https://github.com/user-attachments/assets/2a580712-18a3-46c5-9667-b063eb6add3c)

  ![Image](https://github.com/user-attachments/assets/e038e335-c89f-440b-af62-b63e2e1c16d3)

* Products

  ![Image](https://github.com/user-attachments/assets/dce40b87-0c6b-451d-b4bd-e1f1b0d71e57)

* Product Details

  ![Image](https://github.com/user-attachments/assets/e2a80a8a-652c-41e7-90f0-f4250deb5085)
  
* Cart

  ![Image](https://github.com/user-attachments/assets/4d005d50-feb9-4b33-abb7-5017aedf2663)

* Checkout

  ![Image](https://github.com/user-attachments/assets/3ec7e707-e319-421e-8d97-3485542c0c28)

* Orders

  ![Image](https://github.com/user-attachments/assets/12222da8-b153-419d-926d-62f8f9b2cecf)

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
>>>>>>> 782bc41 (this fashion project)
