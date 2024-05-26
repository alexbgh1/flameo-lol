module.exports = {
  apps: [
    {
      name: 'flameo-lol.alexbgh',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
