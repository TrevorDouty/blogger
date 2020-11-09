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
      router.push({ name: 'Profile' })
      this.getMyBlogs()
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

  // async editComment(blogId, commentId, body) {
  //   try {
  //     const res = await api.put('api/blogs/' + blogId + '/comments' + commentId, body)
  //     AppState.comments = res.data
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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

  async deleteComment(commentId) {
    try {
      if (window.confirm()) {
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
