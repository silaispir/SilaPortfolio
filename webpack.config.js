const path = require('path');

module.exports = {
  // Diğer webpack yapılandırmaları...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    // Eski onAfterSetupMiddleware ve onBeforeSetupMiddleware yerine setupMiddlewares kullanımı
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      devServer.app.use(function(req, res, next) {
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        next();
      });

      return middlewares;
    },
  },
};

