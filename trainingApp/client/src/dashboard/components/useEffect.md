| Form          | Signature              | When it runs                       | Typical use                          |
| ------------- | ---------------------- | ---------------------------------- | ------------------------------------ |
| Every render  | `useEffect(fn)`        | After **every** commit             | Sync something with the DOM/logging  |
| Mount/unmount | `useEffect(fn, [])`    | Once on mount → cleanup on unmount | Subscriptions, timers, one-time init |
| On changes    | `useEffect(fn, [a,b])` | On mount and when **a/b** change   | Fetching, recomputing derived data   |