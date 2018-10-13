all:
	zip -r -q ifttt-shopping-list.zip index.js node_modules
	aws s3 --profile s3-upload-lambda cp ifttt-shopping-list.zip s3://sanpei/ifttt-shopping-list/
	echo https://s3-ap-northeast-1.amazonaws.com/sanpei/ifttt-shopping-list/ifttt-shopping-list.zip

module-install:
	mkdir node_modules
	npm install iconv-lite
	npm install --save @sendgrid/mail
