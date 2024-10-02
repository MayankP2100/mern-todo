import {create} from 'zustand'

const pageStore = (set) => ({
  page: 'todos', updatePage: (page) => set({page: page})
})

const usePageStore = create(pageStore)

export default usePageStore;