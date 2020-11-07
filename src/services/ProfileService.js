import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('/profile')
      AppState.profile = res.data
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()
