import type { UserPreferences } from "../../entities/user_preferences";
import type { UserPreferencesUseCaseInterface } from "../interfaces/interface_user_preferences";
import { userPreferencesRepository } from "../../../infrastructure/repository/database/impl/repo_user_preferences";

class UserPreferencesUseCase implements UserPreferencesUseCaseInterface {
    get(): UserPreferences {
        return userPreferencesRepository.get();
    }
    update(userPreferences: UserPreferences): void {
        return userPreferencesRepository.update(userPreferences);
    }
}

export const userPreferencesUseCase: UserPreferencesUseCase = new UserPreferencesUseCase();