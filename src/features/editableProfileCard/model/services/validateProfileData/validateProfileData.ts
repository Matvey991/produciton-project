import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first, lastName, age, country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age) || age < 12 || age > 100) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
