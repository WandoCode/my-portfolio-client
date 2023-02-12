export const isValidEmail = (str: string) => {
  const emailRegEx = /\b[+\w\.-]{1,25}@[\w-]{1,25}\.\w{1,25}\b/gi
  const matches = str.matchAll(emailRegEx)
  return Array.from(matches).length === 1
}
