export const apiClient = {
  baseUrl:
    import.meta.env.VITE_API_URL ??
    import.meta.env.VITE_API_BASE_URL ??
    (import.meta.env.DEV
      ? 'http://localhost:5000/api'
      : 'https://bloom-hub-landing-page.onrender.com/api'),
}
