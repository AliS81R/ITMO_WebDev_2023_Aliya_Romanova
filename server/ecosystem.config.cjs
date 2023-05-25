module.exports = {
  apps : [{
    script: 'app.cjs',
    "max_restarts" : 3,
    watch: true,
    env: {
      NODE_PORT: 3000
    }
  },
  {
    script: 'user-sqlite.cjs',
    watch: true,
    env: {
      NODE_PORT: 3001
    }
  },
  ],
};
