const app = require('./app.js');
require('greenlock-express')
  .init({
    packageRoot: __dirname,
    configDir: './greenlock.d',
    maintainerEmail: 'bestwishtous@gmail.com',
    cluster: false
  })
// Serves on 80 and 443
// Get's SSL certificates magically!
  .serve(app);
