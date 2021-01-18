dev:
	docker run -it --rm --mount type=bind,source=$(shell pwd),target=/app --workdir=/app --user $(shell id -u):$(shell id -g) -p 8080:8080 node:14 bash
build:
	docker build -t uwwscuba .
start:
	docker run --rm uwwscuba
.PHONY: build
