install:
	npm ci
lint:
	npx eslint .
start-event:
	node bin/brain-event.js
publish:
	npm publish --dry-run