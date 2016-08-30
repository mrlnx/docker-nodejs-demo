exports.findAll = function(request, response) {
   console.log("findAll request: " + request.params.term);
   response.send("Found result: " + request.params.term);
};

exports.create = function(request, response) {
   console.log("Create request: " + request.params);
};

exports.update = function(request, response) {
   console.log("Update request: " + request.params);
};

exports.delete = function(request, response) {
   console.log("Delete request: " + request.params.id);
};
