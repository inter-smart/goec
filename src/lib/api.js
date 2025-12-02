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

  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    const data = await response.json();

    if (!response.ok) {
      return {
        data: null,
        error: true,
        message: data?.message || data?.error || `Error: ${response.status} ${response.statusText}`,
      };
    }

    return {
      data: data?.success ? data?.data : null,
      error: !data?.success,
      message: data?.success ? null : (data?.message || data?.error || "An error occurred"),
    };
  } catch (error) {
    return {
      data: null,
      error: true,
      message: error?.message || "Network error. Please check your connection.",
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
