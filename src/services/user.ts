

const getBaseUrl = () => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    if (!apiUrl) {
      throw new Error('API base URL is not defined in environment variables');
    }
    return apiUrl
}

export const getUserList = async () => {
    try {
        const baseUrl = getBaseUrl()
        const response = await fetch(`${baseUrl}/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
      }
}

export const getUserByUserName = async (userName: string) => {
    try {
        const baseUrl = getBaseUrl()
        const response = await fetch(`${baseUrl}/users/${userName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
}