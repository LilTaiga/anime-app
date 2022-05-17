export interface AnilistData
{
    data?: Data,
}

export interface Data
{
    User: User,
}

export interface User
{
    id: number,
    name: string,
    avatar: Avatar,
    options: Options,
    mediaListOptions: MediaListOptions,
    createdAt: number,
    updatedAt: number,
}

export interface Avatar
{
    medium: string,
    large?: string,
}

export interface MediaListOptions
{
    scoreFormat: string,
    rowOrder: string,
}

export interface Options
{
    titleLanguage: string,
    displayAdultContent: boolean,
    profileColor: string,
    staffNameLanguage: string,
}