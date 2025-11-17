const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}api/frontend/` || "http://localhost:3000/api/frontend/";
export const MEDIA_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "APIError";
    this.status = status;
  }
}

export async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log(url);
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      return {
        data: null,
        error: true,
      };
    }

    const data = await response.json();


    console.log(data)
    return {
      data: data?.success ? data?.data : null,
      error: !data?.success,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
    };
  }
}


export async function postWithFileAPI(endpoint, formData, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData, // Important — do NOT set Content-Type manually
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      // Return error with response data to preserve validation errors
      return {
        data: data,
        error: true,
      };
    }

    return {
      data: data?.success ? data?.data : data,
      error: !data?.success,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      data: { message: error.message || "Network error occurred" },
      error: true,
    };
  }
}
