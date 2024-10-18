const MOVIES_API_URL = process.env.NEXT_PUBLIC_MOVIES_API_URL;

export const fetchMovies = async () => {
  const response = await fetch(`${MOVIES_API_URL}/api/v1/movies`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

export const addMovie = async (title: string) => {
  const response = await fetch(`${MOVIES_API_URL}/api/v1/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to add movie');
  }
  return response.json();
};

export const deleteMovie = async (id: number) => {
  const response = await fetch(`${MOVIES_API_URL}/api/v1/movies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete movie');
  }
  return response.json();
};
