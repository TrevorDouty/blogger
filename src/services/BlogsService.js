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
      this.getMyBlogs()
      router.push({ name: 'Profile' })
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  async createComment(data) {
    try {
      // @ts-ignore
      const newComment = { body: data, blog: AppState.ActiveBlog.id }
      const res = await api.post('api/comments', newComment)
      // @ts-ignore
      this.getComment(AppState.ActiveBlog.id)
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

  async getComments(blogId) {
    try {
      const res = await api.get('api/blogs/' + blogId + '/comments')
      AppState.comments = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async editBlog(blogId, body) {
    try {
      const res = await api.put('api/blogs/' + blogId, body)
      console.log(res.data)
      AppState.myblogs = res.data
      this.getActiveBlog()
      router.push({ name: 'ActiveBlog' })
    } catch (error) {
      console.error(error)
    }
  }

  async editComment(commentId, body) {
    try {
      const res = await api.put('api/comments/' + commentId, body)
      console.log(res.data)
      AppState.comments = res.data
      this.getComments()
      router.push({ name: 'ActiveBlog' })
    } catch (error) {
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    try {
      if (window.confirm('Are you sure you want to delete this blog?')) {
        const res = await api.delete('api/blogs/' + blogId)
        AppState.myblogs = res.data
        router.push({ name: 'Profile' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(commentId) {
    try {
      if (window.confirm('Are you sure you want to delete this comment?')) {
        const res = await api.delete('api/comments/' + commentId)
        console.log(res.data)
        AppState.comments = res.data
        router.push({ name: 'ActiveBlog' })
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsService = new BlogsService()
