export const IS_NEW_USER = 'IS_NEW_USER'

export function isNewUser (boolean) {
    return {
      type: IS_NEW_USER,
      boolean
    }
  }