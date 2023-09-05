const demoAsyncCall = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500))
}

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

export { demoAsyncCall, validateEmail }
