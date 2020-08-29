docker_up:
	docker-compose -p home-automation-ui up -d --build --remove-orphans --force-recreate

docker_stop:
	docker-compose -p home-automation-ui stop

docker_down:
	docker-compose -p home-automation-ui down -v