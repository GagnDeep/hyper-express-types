export = Route;
declare class Route {
    /**
     * Route information holder object.
     *
     * @param {String} method
     * @param {String} pattern
     * @param {Function} handler
     */
    constructor({ app, method, pattern, options, handler }: string);
    _app: any;
    _method: any;
    _pattern: any;
    _handler: any;
    _options: any;
    _path_parameters_key: any[];
    /**
     * Binds middleware to this route and sorts middlewares to ensure execution order.
     *
     * @private
     * @param {Function} handler
     */
    private use;
    get app(): any;
    get method(): any;
    get pattern(): any;
    get handler(): any;
    get options(): any;
    get middlewares(): any;
    get path_parameters_key(): any[];
}
