# Docker Database Instructions
To run a new instance of Postgres locally:

```
$ docker run --name some-postgres -p 5400:5432 -e POSTGRES_PASSWORD=<replace_me> -d postgres

$ docker ps (then note down the first couple of characters from the container id)

$ docker stop <id_characters>
```

To start it back up again:

```
$ docker ps -a (then note down the first couple of characters from the container id)

$ docker start <id_characters>
```

After setting up docker container run migrations and seeds.
