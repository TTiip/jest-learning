import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import PostList from '../PostList.vue'

// Following lines tell Jest to mock any call to `axios.get`
// and to return `fakePostList` instead
jest.mock('axios', () => ({
  get: jest.fn(() => [
    { id: 1, title: 'title1' }
  ]),
  post: jest.fn(() => [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
    { id: 3, title: 'title3' },
    { id: 4, title: 'title4' }
  ])
}))

describe('PostList.vue', () => {
  test('loads gets on button click by get', async () => {
    const wrapper = mount(PostList)

    await wrapper.find('#getGets').trigger('click')

    // Let's assert that we've called axios.get the right amount of times and
    // with the right parameters.
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/gets')

    // Wait until the DOM updates.
    await flushPromises()

    // Finally, we make sure we've rendered the content from the API.
    const postsList = wrapper.findAll('[data-test="post"]')

    expect(postsList).toHaveLength(1)
    expect(postsList[0].text()).toContain('title1')
  })

  test('loads posts on button click by post', async () => {
    const wrapper = mount(PostList)

    await wrapper.find('#getPosts').trigger('click')

    // Let's assert that we've called axios.get the right amount of times and
    // with the right parameters.
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalledWith('/api/posts')

    // Wait until the DOM updates.
    await flushPromises()

    // Finally, we make sure we've rendered the content from the API.
    const postsList = wrapper.findAll('[data-test="post"]')

    expect(postsList).toHaveLength(4)
    expect(postsList[0].text()).toContain('title1')
    expect(postsList[1].text()).toContain('title2')
    expect(postsList[2].text()).toContain('title3')
    expect(postsList[3].text()).toContain('title4')
  })

  // test('displays loading state on button click by post', async () => {
  //   const wrapper = mount(PostList)

  //   // Notice that we run the following assertions before clicking on the button
  //   // Here, the component should be in a "not loading" state.
  //   expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  //   expect(wrapper.find('#getPosts').attributes()).not.toHaveProperty('disabled')

  //   // Now let's trigger it as usual.
  //   await wrapper.find('#getPosts').trigger('click')

  //   // We assert for "Loading state" before flushing all promises.
  //   expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  //   expect(wrapper.find('#getPosts').attributes()).toHaveProperty('disabled')

  //   // As we did before, wait until the DOM updates.
  //   await flushPromises()

  //   // After that, we're back at a "not loading" state.
  //   expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  //   expect(wrapper.find('#getPosts').attributes()).not.toHaveProperty('disabled')
  // })
})
