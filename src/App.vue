<script lang="ts">
import { useUserPreferencesStore } from "../infrastructure/repository/stores/user_preferences";
import { defineComponent, type Ref, ref } from "vue";
import { UserPreferences } from "../domain/entities/user_preferences";

export default defineComponent({
  setup() {
    const userPreferencesStore = useUserPreferencesStore();

    userPreferencesStore.get();
    
    const isMenuOpen: Ref<boolean> = ref(userPreferencesStore.isMenuOpen);

    const openMenu = (): void => {
      isMenuOpen.value = !isMenuOpen.value;
      userPreferencesStore.update(new UserPreferences(isMenuOpen.value));
    }

    return {
      isMenuOpen,
      openMenu
    }
  }
});
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <button
        class="header__menu-button"
        style="transform: rotate(90deg);"
        @click="openMenu"
      >|||</button>
      <h1>Generic CMS</h1>
    </div>
    <nav class="header__nav">
      <img src="https://img.icons8.com/material/24/bebebe/user-male-circle--v1.png"/>
    </nav>
  </header>
  <main class="main">
    <aside v-show="isMenuOpen" class="main__menu">
      <RouterLink to="/"><img src="https://img.icons8.com/material/24/bebebe/user-male-circle--v1.png"/>Home</RouterLink> 
      <RouterLink to="/about"><img src="https://img.icons8.com/material/24/bebebe/settings--v3.png"/>About section</RouterLink>
    </aside>
    <main class="main__content">
      <RouterView />
    </main>
  </main>
</template>

<style lang="scss" scoped>
$menuColor: #403c44;
$mainBackgroundColor: #302c2c;
$headerHeight: 4rem;

@mixin center-aligned-flex {
  display: flex;
  align-items: center;
}

.header {
  @include center-aligned-flex();
  justify-content: space-between;
  height: $headerHeight;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1rem;
  color: #bebebe;
  background-color: $menuColor;
}

.header__logo {
  display:
  flex; gap: 1rem;
}

.header__menu-button {
  height: 2rem;
  width: 2rem;
  background-color: rgb(72 109 161);
  border: none;
  color: white;
  padding: .5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.header__menu-button:hover {
  background-color: rgb(72 109 161 / 80%);
}

h1 {
  color: #bebebe;
  font-size: 2rem;
}

.header__nav > a {
  height: 100%;
}

.main {
  display: flex;
  height: calc(100vh - $headerHeight);
  margin-top: $headerHeight;
}

.main__menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 15rem;
  padding: 1rem;
  color: #bebebe;
  background-color: $mainBackgroundColor;
}

.main__menu > a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  padding: 0 .5rem;
  color: #bebebe;
  text-decoration: none;
  background-color: #403c44;
}

.main__menu > a:hover {
  border-left: 0.2rem solid #486da1;;
}

.main__content {
  width: 100%;
  padding: 1rem;
  background-color: #bebebe;
}
</style>

