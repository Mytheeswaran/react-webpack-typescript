// Dummy import so that the linter won't complain

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: unknown) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})

// ref: https://blog.lysender.com/2023/06/jest-react-testing-window-matchmedia-is-not-a-function/
