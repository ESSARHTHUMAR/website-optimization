import { readClient } from "../lib/client";
import { groq } from 'next-sanity'
import { buildQuery } from "../utils";

interface GetResourcesParams {
    page: string,
    query: string,
    category: string
}

export const getResources = async (params: GetResourcesParams) => {
    const { page, category, query } = params;

    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
              type: 'resource',
              query,
              category,
              page: parseInt(page),
            })}{
              title,
              _id,
              downloadLink,
              "image": poster.asset->url,
              views,
              slug,
              category
            }`
          );
      
          return resources;
    } catch (error) {
        console.log(error);
        
    }
}