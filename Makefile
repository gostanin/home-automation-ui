docker_up:
	docker-compose up -d --build --remove-orphans --force-recreate

docker_stop:
	docker-compose stop

docker_down:
	docker-compose down -v