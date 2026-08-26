export interface IUser {
    id: number;
    username: string;
    email: string;
    age?: number;
}

export interface IDeveloper extends IUser {
    primaryLanguage: string;
    experienceYears: number;
}

export type UploadStatusType = "loading" | "success" | "error";
export const uploadStatus: UploadStatusType = "loading";

export type TextFormatType = 'uppercase' | 'lowercase' | 'capitalize';
export const textFormat: TextFormatType = 'uppercase';

export function sum(a: number, b: number): number {
    return a + b;
}

export function formatText(text: string, format: TextFormatType): string {
    if (format === 'uppercase') {
        return text.toUpperCase();
    }
    if (format === 'lowercase') {
        return text.toLowerCase();
    }
    if (format === 'capitalize') {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    return text;
}

export function removeCharacter(text: string, charToRemove: string): string {
    return text.split(charToRemove).join('');
}

export const usersList: IUser[] = [
    { id: 1, username: 'Ivan', email: 'ivan@test.com', age: 25 },
    { id: 2, username: 'Anna', email: 'anna@test.com' },
    { id: 3, username: 'Petr', email: 'petr@test.com', age: 17 },
    { id: 4, username: 'Elena', email: 'elena@test.com', age: 30 }
];

export const adultUsers: IUser[] = usersList.filter(user => user.age !== undefined && user.age >= 18);
