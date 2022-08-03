/** Object containing all the user preferences that's stored in the localStorage. */
export class UserPreferences {
    /** Tells whether the menu is open or not. */
    public isMenuOpen: boolean;

    constructor(isMenuOpen = false) {
        this.isMenuOpen = isMenuOpen;
    }
}