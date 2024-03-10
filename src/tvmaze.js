const API_BASE = 'https://api.tvmaze.com/search';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Original Netflix',
                items: await basicFetch(`/shows?q=Netflix`)
            },

        ];
    },
    getEpisode: async (autor) => {
        return [
            {
                items: await basicFetch(`/people?q=${autor}`)
            }
        ]
    }
}