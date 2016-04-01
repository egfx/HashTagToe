module.exports = function($http, $loger, breeze){
	var ds = new breeze.DataService({
        serviceName: 'breeze',
        hasServerMetadata: false
    });
    var manager = new breeze.EntityManager({
        dataService: ds
    });

    var service = {
        getAllTodos: getAllTodos,
        save: save,
        reset: reset
    };
    return service;
}