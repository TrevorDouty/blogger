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
    try {
      const res = await api.post('api/blogs/', blogData)
      router.push({ name: 'Profile', params: { blogId: res.data.id } })
      this.getMyBlogs()
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveBlog(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId)
      console.log(res.data)
      AppState.ActiveBlog = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    try {
      if (window.confirm()) {
        await api.delete('api/blogs/' + blogId)
        router.push({ name: 'Profile' })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsService = new BlogsService()
