exports.install = function() {
	ROUTE('+GET /*', index);
	ROUTE('-GET /*', 'login');
};

function index() {

	var self = this;
	var plugins = [];

	for (var key in F.plugins) {
		var item = F.plugins[key];
		var obj = {};
		obj.id = item.id;
		obj.routes = item.routes;
		obj.position = item.position;
		obj.name = TRANSLATOR(self.user.language || '', item.name);
		obj.icon = item.icon;
		obj.import = item.import ? '/_{id}/{import}'.args(item) : '';
		obj.hidden = item.hidden;
		plugins.push(obj);
	}

	plugins.quicksort('position');
	self.view('index', plugins);
}