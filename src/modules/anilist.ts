import { Body, fetch, FetchOptions, Response } from "@tauri-apps/api/http";
import type { AnilistData, MediaQuery } from "./anilistInterface";

const url: string = "https://graphql.anilist.co";

async function sendRequest(query: string, variables: Record<string, any>): Promise<Response<AnilistData>>
{
    let options: FetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: Body.json({
            query: query,
            variables: JSON.stringify(variables, parseVariables),
        })
    };

    let request: Response<AnilistData> = await fetch(url, options);
    return request;
}

export async function searchForUser(name: string): Promise<AnilistData>
{
    const query = `
    query($name: String)
    {
      User(name: $name)
      {
        id
        name
        avatar
        {
          medium
          large
        }
        createdAt
      }
    }`;

    const variables = {
        name: name,
    }

    let result = await sendRequest(query, variables);
    if (result.ok)
        return result.data;
    else
        return Promise.reject("Error while fetching the user: " + result.status);
}

export async function searchMedia(variables?: MediaQuery): Promise<AnilistData>
{
    let query = `
	query($title: String, $genres: [String], $season: MediaSeason, $year: Int, $format: [MediaFormat], $status: [MediaStatus])
    {
        Page(page: 1, perPage: 50)
        {
            media(search: $title, genre_in: $genres, seasonYear: $year, format_in: $format, status_in: $status, season: $season, sort: [POPULARITY_DESC], isAdult: false, type: ANIME)
            {
            title 
            {
                romaji
                english
                native
            }
            
            format
            status
            description(asHtml: true)
            startDate {
                year
                month
                day
            }
            endDate {
                year
                month
                day
            }
            season
            seasonInt
            seasonYear
            episodes
            duration
            coverImage
            {
                large
                medium
                color
            }
            bannerImage
            genres
            synonyms
            }
        }
    }`;

    if(variables == null || variables == undefined)
        variables = {};
    
    let result = await sendRequest(query, variables);
    if (result.ok)
        return result.data;
    else
        return Promise.reject("Error while fetching the user: " + result.status);
}

function parseVariables(key: string, value: any)
{
    if(value == false || value == null)
        return undefined;
    return value;
}