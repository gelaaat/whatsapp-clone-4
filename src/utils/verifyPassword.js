import bcrypt from 'bcrypt'

export const verifyPassword = async (user, password) => {
  const { hash } = user
  const varified = await bcrypt.compare(hash, password)
  return varified
}
