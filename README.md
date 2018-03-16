# SE

Projecto de Tickets Sistema Experto
Postulante Diego Pérez Rebolledo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Pre Requisitos

* Bower
* Postgres 9.6
* Python 2.7
* virtualenv


### Installing

Creamos y activamos virtualenv

```
virtualenv env
source env/bin/activate
```

Luego instalamos mediante pip las librerias necesarias, especificadas en el archivo requirements.txt

```
pip install -r requirements.txt
```

Posteriormente hacemos lo respectivo con las librerias JS mediante Bower, gracias al archivo static/bower.json

```
cd static
bower install
```

En el archivo settings.py se encuentra la configuración de la Base de Datos (Por Default SQLite), para conectar con Postgres descomentar el bloque encabezado con el tíitulo BD POSTGRES. Se debe contar con una base de datos creada y un usuario que tenga control sobre esta.


Usamos migraciones para crear las tablas. No olvidar activar el virtualenv.

```
python manage.py makemigrations
python manage.py migrate

```

LISTO!