export const dateFormat = dateTime => {
  const date = new Date(dateTime)
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}-${date.getHours()}:${date.getMinutes()}`
}
