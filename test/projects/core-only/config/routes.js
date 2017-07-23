module.exports = {
	routes: {
		"GET /": "VIEWController",
		"/view/read": "ViewController.read",
		"/view/read/:id": "ViewController.read",
		"/view/body": "viewController.bodyNormal",
		"POST /view/body": "ViewController.bodyPosted",
		"GET /view/create/:name": "View.create",
		"GET /view/create/:id?": "ViewController.create",
		"POST /view/create/:name+": "ViewController.create",
	}
};
