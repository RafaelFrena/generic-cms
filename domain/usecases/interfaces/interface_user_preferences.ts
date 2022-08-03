import { UserPreferences } from "../../entities/user_preferences";

export interface UserPreferencesUseCaseInterface {
    get(): UserPreferences;
    update(userPreferences: UserPreferences): void;
}