# ProjectShop
https://laravel.com/docs/5.7#installation
https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi
https://victorroblesweb.es/2018/05/23/instalar-angular-6-con-angular-cli/

apache  --> Alias /api "C:\xampp\htdocs\projecteShop\api\public"
			Alias /web "C:\xampp\htdocs\projecteShop\web\dist\web"

part angular
	cd web
	npm install
	ng serve

part larvel
	cd api
	composer install
	composer dump-autoload
