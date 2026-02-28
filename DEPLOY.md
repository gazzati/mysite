# Deploy with Docker Compose

## What Changed
- CI/CD no longer edits `docker-compose.yml` on VPS.
- Deploy now uses immutable image tags (`sha-<commit>`).
- Current deployed tag is stored in `.env.deploy` on the server.

## Deploy Flow
1. GitHub Actions builds Docker image.
2. Image is pushed with tags:
   - `gazzati/mysite:sha-<commit>`
   - `gazzati/mysite:latest`
3. Deploy job connects to VPS and writes `.env.deploy`:
   - `IMAGE_TAG=sha-<commit>`
4. Compose pulls and restarts only `mysite` service.

## Required VPS Layout (Per Project)
Use one directory per project, no app repository clone is required.

Example:
- `/srv/apps/mysite/docker-compose.yml`
- `/srv/apps/mysite/.env` (runtime env vars)
- `/srv/apps/mysite/.env.deploy` (current image tag)
- `/srv/apps/mysite/data.mmdb` (Geo DB file required by the app)

Before first deploy, place required runtime files on VPS:
- `.env`
- `data.mmdb` (or set `MMDB_PATH` in `.env` to custom location)

The deploy workflow now fails fast if `.env` or `data.mmdb` is missing.

## Rollback
From the project directory on VPS:

```bash
echo "IMAGE_TAG=sha-<old-commit>" > .env.deploy
docker compose --env-file .env --env-file .env.deploy pull mysite
docker compose --env-file .env --env-file .env.deploy up -d --no-deps mysite
```

## Multi-Project Recommendation
For multiple projects on one VPS:
- Keep a separate directory per project under `/srv/apps`.
- Keep one compose file per project.
- Put all DNS/TLS/reverse-proxy routing in one dedicated edge stack (Traefik/Caddy/Nginx).
- Use the same deploy pattern for every project: build image in GitHub Actions, deploy by immutable tag.

This keeps runtime state on VPS minimal and removes drift from app repositories.
