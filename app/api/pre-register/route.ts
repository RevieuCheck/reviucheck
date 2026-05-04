import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { PreRegistrationFormData } from '@/types'

export async function POST(request: NextRequest) {
    try {
        const body: PreRegistrationFormData = await request.json()

        // Validate required fields
        const required = ['full_name', 'email', 'company_name', 'role', 'plan_interest']
        for (const field of required) {
            if (!body[field as keyof PreRegistrationFormData]) {
                return NextResponse.json(
                    { success: false, error: `Missing required field: ${field}` },
                    { status: 400 }
                )
            }
        }

        // Check if email already exists
        const { data: existing, error: fetchError } = await supabase
            .from('pre_registrations')
            .select('email')
            .eq('email', body.email)
            .single()

        if (existing) {
            return NextResponse.json(
                { success: false, error: 'Email already registered' },
                { status: 409 }
            )
        }

        // Insert into Supabase
        const { data, error } = await supabase
            .from('pre_registrations')
            .insert([
                {
                    full_name: body.full_name,
                    email: body.email,
                    company_name: body.company_name,
                    role: body.role,
                    plan_interest: body.plan_interest,
                    status: 'pending',
                    created_at: new Date().toISOString()
                }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { success: false, error: 'Database error' },
                { status: 500 }
            )
        }

        // Here you could also send a welcome email or add to CRM

        return NextResponse.json({
            success: true,
            message: 'Successfully registered!',
            data: data[0]
        })

    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        )
    }
}