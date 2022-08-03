import type { UserPreferences } from "../../../../domain/entities/user_preferences";

export interface UserPreferencesRepositoryInterface {
    get(): UserPreferences;
    update(userPreferences: UserPreferences): void;
}