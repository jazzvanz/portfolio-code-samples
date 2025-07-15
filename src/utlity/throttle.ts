// throttle.ts
// The function will only execute at most once every specified delay, even if called multiple times during that period.

export function throttle<T extends (...args: Parameters<T>) => void>(mainFunction: T, delay: number = 0): (...args: Parameters<T>) => void {
    let shouldThrottle = false;

    return function(this: unknown, ...args: Parameters<T>) {
        if (shouldThrottle) {
            return;
        }
        shouldThrottle = true;
        setTimeout(() => {
            shouldThrottle = false;
            mainFunction.apply(this, args);
        }, delay);
    };
}