export = MemoryStore;
declare class MemoryStore {
    _container: {};
    /**
     * This method can be used to lookup/select specific keys from store
     *
     * @param {String} key
     * @returns {Any} Any OR undefined
     */
    select(key: string): any;
    /**
     *
     * @param {String} key
     * @param {Object} data
     * @param {Number} expiry_ts In Milliseconds
     */
    insert(key: string, data: any, expiry_ts: number): void;
    update(key: any, data: any, expiry_ts: any): void;
    touch(key: any, expiry_ts: any): void;
    delete(key: any): void;
    empty(): void;
    cleanup(): number;
    get data(): {};
}
