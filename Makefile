install:
	npm ci
lint:
	npx eslint .
start:
	node bin/brain-start.js
publish:
	npm publish --dry-run
link:
	sudo npm link