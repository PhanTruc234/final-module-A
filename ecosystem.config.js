module.exports = {
  apps: [
    {
      name: "htmlcss",
      script: "server.js",
      cwd: __dirname,
      env: {
        PORT: 3030,
        PM2_SERVE_PORT: 3030
      }
    }
  ]
};
