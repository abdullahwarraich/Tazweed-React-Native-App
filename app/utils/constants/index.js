import { Platform } from 'react-native'

export const CONSTANTS = {
  BASE_URL:
    Platform.OS === 'android'
      ? `http://10.0.2.2:8000/api`
      : `http://localhost:8000/api`
}
