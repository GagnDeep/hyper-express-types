export function log(logger: string, message: any): void;
export function random_string(length?: number): string;
export function assert_log(group: any, target: any, assertion: any): void;
export function async_for_each(items: any, handler: any, cursor: number, final: any): any;
export function http_post_headers({ host, port, path, method, body, headers, silence_errors, }: {
    host: any;
    port: any;
    path: any;
    method?: string;
    body: any;
    headers?: {};
    silence_errors?: boolean;
}): any;
export function async_wait(delay: any): any;
