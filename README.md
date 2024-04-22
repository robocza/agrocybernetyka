Start docker containers

```bash
docker compose build
docker compose up -d
```

Get into docker

```bash
docker exec -it --user 1000:1000 agrocybernetyka-node fish
```

Install dependencies

```bash
npm install
```

Run project (inside docker)

```bash
npm run dev
```
