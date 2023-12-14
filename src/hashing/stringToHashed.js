import bcrypt from 'bcrypt'

export async function toHashString(plaintextString) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(12)

    // Hash the string with the generated salt
    const hash = await bcrypt.hash(plaintextString, salt)

    // Return the hashed value
    return hash
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message)
    throw error
  }
}
export async function compareToHashString(plaintextString) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(12)

    // Hash the string with the generated salt
    const hash = await bcrypt.hash(plaintextString, salt)

    // Return the hashed value
    return bcrypt.compare(plaintextString, hash).then((res) => res)
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message)
    throw error
  }
}
