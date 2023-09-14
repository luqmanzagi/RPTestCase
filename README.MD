# THIS IS THE TEST PAGES FOR REFERRER POLICY

You can test different referrer policies here:
- index: RP on Meta (control page)
- index_norp : No RP (control page)
- Page1 : Link on the link and image
- Page2: 2 RP on Meta (unsafe-url, no-referrer)
- Page3: 2 RP on Meta (no-referrer, unsafe-url) 
- Page4 : RP on iframe
- Page5 : RP on meta and iframe (Meta (unsafe-url) and iframe (origin))
- Page6 : RP on meta and iframe (Meta (origin) and iframe (unsafe-url))
- Page7 : RP on Link tag without a defintion on metatag
- Page8 : RP on meta and script (script sent data using payload on the post method)
- Page9 : Nested iframes with RP defined on iframe tag
- Page10 : Nested iframes without RP defined on iframe tag
- Page11 : Tracker that extract current URL and send to server using payload (no RP)
- Page12 : Tracker that extract current URL and send it as path on the URL 
- Page13 : Iframe with tracker (source page 12)
- Page14 : Tracker that extract current pathname and hostname in the different request (no-refferrer)


# HOW TO USE

## Install LIVE Server extension in VS Code
- open folder for this paged in VS Code
- install Live server extension
- click on the Go Live button on the bottom right of VS Code

## IF YOU USE DOCKER

run this docker command to start a simple http server to serve the files:
```
$ docker build -t my-apache2 .
$ docker run -dit --name my-running-app -p 8080:80 my-apache2
```

