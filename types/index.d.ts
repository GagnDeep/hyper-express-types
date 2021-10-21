import Server = require("./src/components/Server.js");
import Router = require("./src/components/router/Router.js");




declare module 'hyper-express'{
	export const Server: Server	
    export const Router: Router
}


export { Server, Router};

