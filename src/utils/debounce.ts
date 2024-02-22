type callbackType = (...args: never[]) => void;

export function debounce(callback: callbackType, timeout: number) {
  return function perform(...args: never[]) {
    let lastCall: number | undefined = undefined;
    let lastCallTimer: ReturnType<typeof setTimeout> | undefined = undefined;

    const previousCall = lastCall;

    lastCall = Date.now();

    if (previousCall && lastCall - previousCall <= timeout) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => callback(...args), timeout);
  };
}
