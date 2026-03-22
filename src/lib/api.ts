const API_BASE = 'https://api.swiftpdf.cloud';

export async function uploadFile(endpoint: string, formData: any) {


  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Server Error");
  }

  return response.blob();
}