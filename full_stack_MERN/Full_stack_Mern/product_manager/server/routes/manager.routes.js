const ManagerController = require("../controllers/manager.controller");

module.exports = function(app){
    app.get('/api', ManagerController.index);
    app.post('/api/create/new', ManagerController.createManager);
    app.get('/api/getall', ManagerController.getAllManagers);
    app.get('/api/getone/:id', ManagerController.getOneManager);
    app.put('/api/:id/edit', ManagerController.updateManager);
    app.delete('/api/:id/delete', ManagerController.deleteManager)
}

