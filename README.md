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

## Tipos de redes en Docker

### bridge
Es el driver de red predeterminado. Crea una red privada interna donde los contenedores pueden comunicarse entre si usando sus nombres de servicio. Docker Compose utiliza bridge de forma automatica para conectar los servicios definidos. Es ideal para aplicaciones que corren en un unico host y necesitan aislamiento de la red externa.

### host
Elimina el aislamiento de red entre el contenedor y el host. El contenedor compila la pila de red del host, por lo que no tiene su propia direccion IP. Es util cuando se necesita el maximo rendimiento de red o acceso directo a interfaces del host, pero reduce el aislamiento.

### none
Deshabilita toda la conectividad de red del contenedor. Los contenedores con esta red solo tienen la interfaz loopback. Se utiliza para casos donde se requiere un aislamiento total de red.

### overlay
Permite la comunicacion entre contenedores que corren en diferentes hosts. Es el tipo de red utilizado por Docker Swarm para conectar servicios distribuidos en un cluster. No es necesaria para entornos de un solo host.
