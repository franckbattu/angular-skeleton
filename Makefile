.DEFAULT_GOAL := help
.PHONY: help

help: ## Show help and available commands
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

clean: ## Clean generated folders
	rm -rf .angular
	rm -rf dist

install: clean ## Install dependencies
	rm -f package-lock.json
	rm -rf node_modules
	npm cache clean --force
	npm install

build: ## Build project
	npm run build

webapp-start: ## Start webapp
	npm run start:webapp

webapp-e2e: ## Run webapp e2e tests
	npm run cy:run:webapp

quality: ## Check quality on webapp
	npm run clean:imports
	npm run lint:code:fix
	npm run lint:styles:fix
	npm run format:fix
	npm run tools:check-format

test: ## Run unit tests
	npm run test