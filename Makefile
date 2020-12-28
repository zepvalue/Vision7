.PHONY: help

node_modules: package.json

deps: node_modules 	## Does a npm install
	@npm install

dev: node_modules ## Runs the docker-compose file
	@docker-compose up
