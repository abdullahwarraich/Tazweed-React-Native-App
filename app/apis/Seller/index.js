import { CONSTANTS, REQUEST } from '../../utils'

const { BASE_URL } = CONSTANTS

export const getSellers = async (search = '') => {
  let queryParams = ''
  if (search) queryParams = `search=${search}`
  return await REQUEST(`${BASE_URL}/sellers?${queryParams}`)
}

export const getAppointments = async sellerId =>
  REQUEST(`${BASE_URL}/appointment/${sellerId}?status=AVAILABLE`)

export const bookAppointment = async (id, status = 'PENDING') =>
  REQUEST(`${BASE_URL}/appointment/${id}`, 'PUT', { status })
