<template>
  <div id="app">
    <header class="header">
      <h1 class="header__logo">Жилфонд</h1>
      <span class="header__title">Пользователь</span>
    </header>
    <main class="main">
      <SideBar class="main__list" />
      <UserCard class="main__card" />
    </main>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    UserCard
  },
}
</script>

<style lang="scss">
  @import '@/assets/style/fonts.scss';
  @import '@/assets/style/main.scss';
</style>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  padding: 50px 50px 58px;
  height: 100vh;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}

.header__logo {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
  text-align: left;
  color: #E31F24;
}

.header__title {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
  color: #333333;

}

.main {
  display: flex;
  flex-direction: row;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  background-color: #FDFDFD;
  overflow: hidden;
}

.main__list {
  min-width: 251px;
  border-right: 1px solid #E0E0E0;
}

.main__card {
  padding: 30px 30px 30px 21px;
}
</style>
