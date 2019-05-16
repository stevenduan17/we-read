const book = {
  state: {
    fileName: ''
  },
  mutations: {
    'setFileName': (state, fileName) => {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName: (context, fileName) => {
      return context.commit('setFileName', fileName)
    }
  },
  getters: {
    fileName: state => {
      return state.fileName
    }
  }
}

export default book
