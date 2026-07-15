import { apiClient } from './client'

export type EnquiryPayload = {
  fullName: string
  phoneNumber: string
  bouquetName: string
  message?: string
}

export type EnquiryResponse = {
  message: string
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const response = await fetch(`${apiClient.baseUrl}/enquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => ({}))) as Partial<EnquiryResponse & { error: string }>

  if (!response.ok) {
    throw new Error(data.error ?? data.message ?? 'Unable to submit enquiry.')
  }

  return {
    message: data.message ?? 'Enquiry submitted successfully.',
  }
}
