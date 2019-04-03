Router.map(function () {
    this.route('*', {
      where: 'server',
  
      action: function () {
        this.response.writeHead(301, { Location: 'https://boomtown.dev' });
        this.response.end();
      }
    });
  })