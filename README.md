If Added Item to Alexa Shopping List Then Send e-mail(on Japanese)

From April/2018, IFTTT "If item added to your Shopping List," is
wrong encoding. So we can't directry use AddedItem strings.

So This node.js WebHook convert IFTTT buggy(?) encoding string
to node.js(UTF-8) encoding and send email via SendGrid.


Settings

1. IFTTT

https://user-images.githubusercontent.com/10361358/46900338-5b511400-cedb-11e8-88c5-246a3b18eb9a.png

2. See index.js code(related to AWS lambda settings and SendGrid settings)

