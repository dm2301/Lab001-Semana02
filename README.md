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

## Tipos de volumenes en Docker

### bind mount
Monta una ruta especifica del host dentro del contenedor. El archivo o directorio existe en el sistema de archivos del host y cualquier cambio se refleja en ambos lados. Es util para compartir codigo fuente durante el desarrollo, pero puede generar problemas de permisos y no esta gestionado por Docker.

### named volume
Es un volumen gestionado por Docker y almacenado en el area de datos de Docker. Se identifica por un nombre y persiste mas alla del ciclo de vida del contenedor. Es la forma recomendada de persistir datos de bases de datos u otros servicios stateful, ya que facilita backups, migraciones y portabilidad.

### tmpfs
Crea un volumen temporal en la memoria del host. Los datos se pierden cuando el contenedor se detiene. Es util para archivos sensibles que no deben escribirse en disco o para caches temporales que no requieren persistencia.

## Variables de entorno

Las siguientes variables se leen desde el archivo `.env`:

| Variable | Descripcion | Ejemplo |
|----------|-------------|---------|
| `MESSAGE` | Mensaje personalizado que la API incluye en la respuesta | `DockerLab` |
| `PORT` | Puerto interno en el que escucha la API dentro del contenedor | `3000` |
| `POSTGRES_USER` | Usuario administrador de PostgreSQL | `labuser` |
| `POSTGRES_PASSWORD` | Contrasena del usuario de PostgreSQL | `labpass` |
| `POSTGRES_DB` | Nombre de la base de datos creada al iniciar PostgreSQL | `labdb` |

Para configurar el entorno local copia `.env.example` a `.env` y ajusta los valores segun sea necesario. El archivo `.env` no debe subirse al repositorio.
