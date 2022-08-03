import { UserPreferences } from "../../../domain/entities/user_preferences";
import { defineStore } from "pinia";
import { userPreferencesUseCase } from "../../../domain/usecases/impl/usecase_user_preferences"

export const useUserPreferencesStore = defineStore({
  id: "user_preferences",
  state: () => ({
    userPreferences: new UserPreferences(),
  }),
  getters: {
    isMenuOpen: (state) => state.userPreferences.isMenuOpen,
  },
  actions: {
    get() {
      this.userPreferences = userPreferencesUseCase.get();
      console.log("get..., ", this.userPreferences);
    },
    update(userPreferences: UserPreferences) {
      console.log("updating... ", userPreferences);
      userPreferencesUseCase.update(userPreferences);
    },
  },
});
