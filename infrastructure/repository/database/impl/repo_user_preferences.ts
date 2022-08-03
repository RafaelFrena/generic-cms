import { UserPreferences } from "../../../../domain/entities/user_preferences";
import type { UserPreferencesRepositoryInterface } from "../interfaces/interface_user_preferences";

class UserPreferencesRepository implements UserPreferencesRepositoryInterface {
    get(): UserPreferences {
        const userPreferences = localStorage.getItem("userPreferences");

        if (!userPreferences) {
            return new UserPreferences();
        }

        return JSON.parse(userPreferences) as UserPreferences;
    }
    update(userPreferences: UserPreferences): void {
        return localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    }
}

export const userPreferencesRepository: UserPreferencesRepository = new UserPreferencesRepository();