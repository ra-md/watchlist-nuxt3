const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const params = {
	api_key: API_KEY,
	language: 'en-US'
}

const api = {
	trending({mediaType, page = 1}) {
		return $fetch(`${BASE_URL}/trending/${mediaType}/week`, {
			params: {
				page,
				...params
			}
		})
	},
	topRated({mediaType, page = 1}) {
		return $fetch(`${BASE_URL}/${mediaType}/top_rated`, {
			params: {
				page,
				...params
			}
		})
	},
	now({mediaType, page = 1}) {
		return $fetch(`${BASE_URL}/${mediaType}/${mediaType === 'tv' ? 'on_the_air' : 'now_playing'}`, {
			params: {
				page,
				...params
			}
		})
	},
	detail(mediaType, id) {
		return $fetch(`${BASE_URL}/${mediaType}/${id}`, {
			params
		})
	}
}

export default api
