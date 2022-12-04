dep:
	bash deploy.sh
	git add .
	git commit -m 'fix'
	git push origin master
push:
	git add .
	git commit -m 'fix'
	git push origin master
dev:
	npm run dev
build:
	npm run build
	npm run preview
preview:
	npm run preview
