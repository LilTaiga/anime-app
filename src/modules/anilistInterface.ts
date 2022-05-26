export interface AnilistData
{
    data?: Data,
}

export interface Data
{
    User: User,
    Page: Page,
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

export interface Page
{
    media: Media[],
}

export interface MediaQuery
{
    title?: string,
    genres?: Genres[],
    season?: MediaSeason,
    year?: number,
    format?: MediaFormat[],
    status?: MediaStatus[],
}

export interface Media
{
    title: MediaTitle,
    format: MediaFormat,
    status: MediaStatus,
    description: string,
    startDate: FuzzyDate,
    season?: MediaSeason,
    seasonInt?: number,
    seasonYear?: number,
    episodes?: number,
    duration?: number,
    coverImage: MediaCoverImage,
    bannerImage?: string,
    genres: Genres[],
    synonyms: string[],
}

export interface MediaTitle
{
    english?: string,
    romaji?: string,
    native: string,
}

export enum MediaFormat
{
    Tv = "TV",
    TvShort = "TV_SHORT",
    Movie = "MOVIE",
    Special = "SPECIAL",
    Ova = "OVA",
    Ona = "ONA",
    Music = "MUSIC",
    Manga = "MANGA",
    Novel = "NOVEL",
    OneShot = "ONE_SHOT",
}

export enum MediaStatus
{
    Finished = "FINISHED",
    Releasing = "RELEASING",
    NotYetReleased = "NOT_YET_RELEASED",
    Cancelled = "CANCELLED",
    Hiatus = "HIATUS",
}

export interface FuzzyDate
{
    year?: number,
    month?: number,
    day?: number,
}

export enum MediaSeason
{
    Winter = "WINTER",
    Spring = "SPRING",
    Summer = "SUMMER",
    Fall = "FALL",
}

export interface MediaCoverImage
{
    extraLarge: string,
    large: string,
    medium: string,
    color: string,
}

export type Genres = 
    "Action" |
    "Adventure" |
    "Comedy" |
    "Drama" |
    "Ecchi" |
    "Fantasy" |
    "Horror" |
    "Mahou Shoujo" |
    "Mecha" |
    "Music" |
    "Mystery" |
    "Psychological" |
    "Romance" |
    "Sci-fi" |
    "Slice of Life" |
    "Sports" |
    "Supernatural" |
    "Thriller";