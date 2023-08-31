const demoAsyncCall = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500))
}

export { demoAsyncCall }
