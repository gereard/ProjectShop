# ProjectShop

Seguir tots els passos:

https://laravel.com/docs/5.7#installation
https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi
https://victorroblesweb.es/2018/05/23/instalar-angular-6-con-angular-cli/

apache  --> Alias /api "C:\xampp\htdocs\projecteShop\api\public"
			Alias /web "C:\xampp\htdocs\projecteShop\web\dist\web"
			
Crear base de dades amb nom multimedia, i executar multimedia.sql
Crear usuari admin i amb password admin al mysql.

Obrir temrinal i anar a C:\xampp\htdocs\projecteShop\

part angular
	cd web
	npm install
	ng serve

part larvel
	Obrir un altre terminal.
	cd api
	composer install
	composer dump-autoload
