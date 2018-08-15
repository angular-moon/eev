declare module 'eev' {
    type CallbackFunction = (...args: any[]) => void

    export class Eev {
        constructor();
        on(names: string, fn: CallbackFunction): void;
        off(names: string, fn: CallbackFunction): void;
        emit(name: string, ...args: any[]): void;
    }

    export default Eev
}

