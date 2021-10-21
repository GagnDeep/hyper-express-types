export = LiveFile;
declare class LiveFile {
    constructor(options: any);
    _name: any;
    _watcher: any;
    _extension: any;
    _buffer: any;
    _content: any;
    _last_update: any;
    _options: {
        path: string;
        retry: {
            every: number;
            max: number;
        };
    };
    /**
     * @private
     * Initializes File Watcher to reload file on changes
     */
    private _initiate_watcher;
    _reload_promise: any;
    _reload_resolve: any;
    _reload_reject: any;
    /**
     * Reloads buffer/content for file asynchronously with retry policy.
     *
     * @private
     * @param {Boolean} fresh
     * @param {Number} count
     * @returns {Promise}
     */
    private reload;
    _ready_promise: any;
    _ready_resolve: any;
    /**
     * Flushes pending ready promise.
     * @private
     */
    private _flush_ready;
    /**
     * Returns a promise which resolves once first reload is complete.
     *
     * @returns {Promise}
     */
    ready(): Promise<any>;
    get is_ready(): boolean;
    get name(): any;
    get path(): string;
    get extension(): any;
    get content(): any;
    get buffer(): any;
    get last_update(): any;
    get watcher(): any;
}
