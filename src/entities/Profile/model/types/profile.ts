import { Country, Currency } from 'shared/const/common';

export interface Profile {
    'first': string,
    'lastName': string,
    'age': 23,
    'currency': Currency,
    'county': Country,
    'city': string,
    'username': string,
    'avatar': string
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
