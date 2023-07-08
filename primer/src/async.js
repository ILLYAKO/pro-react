import { sumValues } from "./sum";
export function asyncAdd(values) {
    console.log(`Async 1`);
    return new Promise((callback) =>
        setTimeout(() => {
            let total = sumValues(values);
            console.log(`Async Total: ${total}`);
            callback(total);
        }, 1000)
    );
}
