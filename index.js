var restify = require('restify');

function newTodo(req, res, next) {
    res.send({name: 'new todo'});
    next();
}

function deleteTodo(req, res, next) {
    res.send({name: 'delete todo'});
    next();
}

function updateTodo(req, res, next) {
    res.send({name: 'update todo'});
    next();
}

function getTodo(req, res, next) {
    var tid = req.params.tid
            res.send({name: 'get todo by ' + tid});
    next();
}

function getTodos(req, res, next) {
    res.send({name: 'get todo list'});
    next();
}

var server = restify.createServer({
    name: 'todo',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.conditionalRequest());

server.get('/todo', getTodos);
server.get('/todo/:tid', getTodo);
server.post('/todo', newTodo);
server.put('/todo/:tid', updateTodo);
server.del('/todo/:tid', deleteTodo);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});