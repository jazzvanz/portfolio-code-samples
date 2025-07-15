// debounce.ts
// The function will only execute after a specified delay has passed since the last call.

// Helpful articles 
// https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc
// https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
export function debounce<T extends (...args: Parameters<T>) => void>(mainFunction: T, delay: number = 0): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function(this: unknown, ...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        timeoutId = setTimeout(() => {
            mainFunction.apply(context, args);
        }, delay);
    };
}