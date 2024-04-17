<template>
  <div class="sidebar">
    <div class="sidebar__search">
      <h2>Поиск сотрудников</h2>
      <input type="text" v-model="searchText" class="sidebar__input" placeholder="Введите Id или имя">
    </div>
    <div class="sidebar__result-list">
      <h2>Результаты</h2>
      <div v-if="isLoading" class="sidebar__loading"></div>
      <div v-else-if="isUsers">
        <MiniUserCard
          v-for="userData in userList"
          :key="userData.id"
          :user-data="userData"
          class="sidebar__result-item"
          :class="{'sidebar__result-item--active': userData.active }"
        />
      </div>
      <div v-else class="sidebar__result-empty">
        <span v-if="searchText">ничего не найдено</span>
        <span v-else>начните поиск</span>
      </div>
    </div>
  </div>
</template>

<script>
import MiniUserCard from '@/components/MiniUserCard.vue'

export default {
  name: 'SideBar',
  components: {
    MiniUserCard
  },
  data() {
    return {
      searchText: '',
      lastSearchArr: [],
    }
  },
  computed: {
    // Преобразуем в массив строк без пробелов
    searchArr () {
      return (this.searchText.trim()).split(',').map(item => item.trim())
    },
    //  Убираем повторяющиеся значения и пустые строки
    clearedSearchArr () {
      return [...new Set(this.searchArr.filter(item => item !== ''))]
    },
    userList () {
      return this.$store.getters.getUsersList
    },
    isUsers () {
      return !!this.userList.length
    },
    isLoading () {
      return this.$store.getters.getIsLoading
    }
  },
  watch: {
    clearedSearchArr: function () {
      const sortedSearchArr = this.clearedSearchArr.sort()
      if (sortedSearchArr.toString() === this.lastSearchArr) return

      this.lastSearchArr = sortedSearchArr.toString()

      this.$store.dispatch('loadUsers', this.searchArr)
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 27px 31px 20px 20px;
  overflow: auto;

  h2 {
    margin: 0;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
    color: #333333;
  }
}

.sidebar__loading {
  width: 0;
  height: 0;
  border-width: 20px;
  border-radius: 50%;
  border-right-color: #333333;
  border-left-color: #333333;
  border-top-color: #E9ECEF;
  border-bottom-color: #E9ECEF;
  border-style: solid;
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.sidebar__search {
  margin-bottom: 29px;

  h2 {
    margin-bottom: 14px;
  }
}

.sidebar__input {
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  border: 1.5px solid #E9ECEF;
  color: #76787D;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
}

.sidebar__result-list {
  h2 {
    margin-bottom: 18px;
  }
}

.sidebar__result-item {
  margin-bottom: 18px;
}

.sidebar__result-empty {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  color: #76787D;
}
</style>
