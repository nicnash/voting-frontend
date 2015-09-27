module.exports = function(app) {
  var express = require('express');
  var ideasRouter = express.Router();

  ideasRouter.get('/', function(req, res) {
    res.send({
      'ideas': [ {id:1,title:"create voting site using react",count:5},
                {id:2,title:"Online Store for tshirts",count:3},
                {id:3,title:"pong with firebase",count:-5}]
    });
  });

  ideasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ideasRouter.get('/:id', function(req, res) {
    res.send({
      'ideas': {
        id: req.params.id
      }
    });
  });

  ideasRouter.put('/:id', function(req, res) {
    res.send({
      'ideas': {
        id: req.params.id
      }
    });
  });

  ideasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/ideas', ideasRouter);
};
