import liveServer from 'live-server'

const params = {
  port: 8181,
  host: "0.0.0.0",
  root: "./src",
  open: false,
  file: "index.html",
  wait: 1000,
  mount: [['src', './node_modules']],
  logLevel: 2,
}

liveServer.start(params)
