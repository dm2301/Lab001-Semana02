# Laboratorio 02

Laboratorio de despliegue con Docker Compose. El objetivo es levantar tres copias de una API construida localmente junto con un servicio de base de datos PostgreSQL, utilizando redes bridge y volúmenes nombrados.

## Stack

- Node.js
- Express
- Docker
- Docker Compose
- PostgreSQL

## Comandos para desplegar

1. Copia el archivo de variables de entorno:

```bash
cp .env.example .env
```

2. Levanta los servicios en segundo plano y construye la imagen local:

```bash
docker compose up -d --build
```

3. Verifica que los servicios estén corriendo:

```bash
docker compose ps
```

4. Prueba los endpoints de la API:

```bash
curl http://localhost:3001
curl http://localhost:3002
curl http://localhost:3003
```

5. Para detener los servicios:

```bash
docker compose down
```

6. Para detener los servicios y eliminar el volumen de datos:

```bash
docker compose down -v
```
