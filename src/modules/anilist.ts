import { Body, fetch, FetchOptions, Response } from "@tauri-apps/api/http";
import type { AnilistData } from "./anilistInterface";

const url: string = "https://graphql.anilist.co";

async function sendRequest(query: string, variables: Record<any, any>): Promise<Response<AnilistData>>
{
    let options: FetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: Body.json({
            query: query,
            variables: variables,
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