const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

const routes = {
	404: "/js_router/pages/404.inc",
	"/": "/js_router/pages/index.inc",
	"/about": "/js_router/pages/about.inc",
	"/lorem": "/js_router/pages/lorem.inc",
};

const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.querySelector("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
