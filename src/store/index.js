import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://jsonplaceholder.typicode.com/users';
const query = {
  id: 'id',
  userName: 'username'
}
const getStringQueryParams = (queryName, arr) => {
  const stringQueryParams = arr.map(item => `${queryName}=${item}`).join('&')
  return stringQueryParams;
}

const getUsersList = async(queryName, arr) =>{
  try {
    const usersList = await fetch(`${url}?${getStringQueryParams(queryName, arr)}`)
    .then(response => response.json())
    return usersList
  } catch (error) {
    return error
  }
}

export default new Vuex.Store({
  state: {
    usersList: [],
    loadingInProgress: false,
    activeUserId: '',
    error: null,
  },
  mutations: {
    setLoadingStatus(state, payload) {
      state.loadingInProgress = payload
    },
    setUsers(state, usersList) {
      state.usersList = usersList
    },
    setActiveUserId(state, id) {
      state.activeUserId = id
    },
    setError(state, error) {
      state.error = error
    },
  },
  getters: {
    getUsersList(state) {
      return state.usersList.map(user => {
        user.active = false;
        if (user.id === state.activeUserId) {
          user.active = true;
        }
        return user;
      })
    },
    getActiveUserId(state) {
      return state.activeUserId
    },
    getActiveUser(state) {
      return state.usersList.find(user => user.id === state.activeUserId)
    },
    getIsLoading(state) {
      return state.loadingInProgress
    },
    getError(state) {
      return state.error
    },
  },
  actions: {
    async loadUsers({commit}, searchStringArr) {
      if (searchStringArr.length === 0) {
        commit('setUsers', [])
        return
      }
      try {
        commit('setLoadingStatus', true)
        commit('setError', null)
        const usersListByUserName = await getUsersList(query.userName, searchStringArr)
        const usersListById = await getUsersList(query.id, searchStringArr)
        const usersList = await Promise.all([...usersListByUserName, ...usersListById])
        const usersIdArr = usersList.map(item => item.id)
        const uniqUsersIdArr = [...new Set(usersIdArr)]
        const uniqUsersList = uniqUsersIdArr.map(id => usersList.find(item => item.id === id))
        commit('setUsers', uniqUsersList)
      } catch (error) {
        console.error("Ошибка запроса:", error)
        commit('setError', error)
      } finally {
        commit('setLoadingStatus', false)
      }
    },
    setActiveUserId({commit}, id) {
      commit('setActiveUserId', id)
    },
  }
})