/** The eventlistener: */
const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

/** The routes: */
const routes = {
	404: "/js_router/pages/404.inc",
	"/": "/js_router/pages/index.inc",
	"/about": "/js_router/pages/about.inc",
	"/lorem": "/js_router/pages/lorem.inc",
};

/** The locationhandler which is called in the eventlistener: */
const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.querySelector("main").innerHTML = html;
};

/** The eventtrigger: */
window.onpopstate = handleLocation;

/** Add the eventlistener to the window-object: */
window.route = route;

console.log(window);

/** The initial locationhandler: */
handleLocation();
