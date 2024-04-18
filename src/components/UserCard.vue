<template>
  <div class="card">
    <div v-if="!!error" class="card__empty">
      <span class="card__empty-message">Ошибка: {{ error }}</span>
    </div>
    <div v-else-if="!!userData" class="card__content">
      <div class="card__photo">
        <img class="card__img" :alt="userData.username" src="@/assets/img/default-photo.svg">
      </div>
      <div class="card__info">
        <div class="card__name">
          {{ userData.name }}
        </div>
        <div class="card__contacts">
          <div class="card__contact">
            <b>email:</b>&nbsp; {{ userData.email }}
          </div>
          <div class="card__contact">
            <b>phone:</b>&nbsp; {{ userData.phone }}
          </div>
        </div>
        <div class="card__about">
          <div class="card__about-title">
            <b>О себе:</b>
          </div>
          <div class="card__about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
    <div v-else class="card__empty">
      <span class="card__empty-message">Выберите сотрудника, чтобы посмотреть его профиль</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  computed: {
    userData () {
      return this.$store.getters.getActiveUser
    },
    error () {
      return this.$store.getters.getError
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}

.card__content {
  display: flex;
  gap: 61px;
}

.card__photo {
  display: flex;
  flex-grow: 1;
  border: 1px solid #E0E0E0;
  width: 100%;
  height: 100%;
  min-width: 424px;
  max-height: 286px;
}

.card__img {
  width: 100%;
}

.card__info {
  text-align: left;
  color: #000000;
}

.card__name {
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  margin-bottom: 10px;
}

.card__contacts {
  margin-bottom: 20px;
}

.card__contact {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  b {
    font-weight: 600;
  }
}

.card__about-title {
  margin-bottom: 25px;
}

.card__about-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: #76787D;
}

.card__empty {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100%;
}

.card__empty-message {
  margin: auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  color: #76787D;
}

@media (max-width: 1180px) {
  .card__content {
    flex-wrap: wrap;
  }

  .card__photo {
    min-width: auto;
    max-height: auto;
  }
}
</style>
