module.exports = {
  apps : [{
    name   : "serie-api",
    script : "npm run start",
    instances: 1,
    env: {
      PORT: 4000
    },
    increment_var : 'PORT',
  }]
}
