export interface ProfileEditableData {
    name:string
    phone: string
}

export interface ProfileData extends ProfileEditableData {
    email:sting
}

export interface CreateProfileData {
    name: string
    email: string
    phone: string
    password: string
    message?: string | null
}