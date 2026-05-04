export interface PreRegistrationFormData {
    full_name: string
    email: string
    company_name: string
    role: string
    plan_interest: string
}

export interface ApiResponse {
    success: boolean
    message: string
    data?: any
    error?: string
}