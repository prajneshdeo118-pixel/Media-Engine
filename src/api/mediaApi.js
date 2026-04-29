import axios from "axios";

const Unsplash_Key = import.meta.env.VITE_UNSPLASH_KEY;
const Pexel_Key = import.meta.env.VITE_PEXEL_KEY;
export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos`,
    {
      params: { query, page, per_page },
      headers: { Authorization: `Client-ID ${Unsplash_Key}` }
    }
  );
  return res.data
}
export async function fetchVideos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
      params: { query, page, per_page },
      headers: { Authorization: Pexel_Key }
    });
    return res.data.videos;
  }
