import { AppState } from '../AppState'
import router from '../router'
import { api } from '../services/AxiosService'

class BlogsService {
  async getAll() {
    try {
      const res = await api.get('api/blogs')
      AppState.blogs = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getMyBlogs() {
    try {
      const res = await api.get('api/profile/blogs')
      console.log(res.data)
      AppState.myblogs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createBlog(blogData) {
    await api.post('api/blogs', blogData)
    router.push({ name: 'Profile' })
  }
}

export const blogsService = new BlogsService()
