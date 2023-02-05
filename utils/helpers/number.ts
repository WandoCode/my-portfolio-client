const isInteger = (str: string) => {
  const regex = /[0-9]{1,}/

  return regex.test(str)
}

export { isInteger }
