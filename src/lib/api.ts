const API_BASE = 'http://127.0.0.1:8000';

export async function uploadFile(endpoint: string, formData: FormData, isJson = false) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Server Error");
  }

  // If we just want the text (JSON), return json. Otherwise, return blob.
  return isJson ? response.json() : response.blob();
}