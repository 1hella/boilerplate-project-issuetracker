'use strict';
let projects = {};

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      let body = req.body;
      body._id = "asdfbasdlfkjasdlfkj";
      body.created_on = "asdfasdf";
      body.updated_on = body.created_on;
      body.open = true;
      res.send(body);
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};
