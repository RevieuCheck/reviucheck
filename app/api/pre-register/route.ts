// import { NextRequest, NextResponse } from 'next/server'
// import { supabase } from '@/lib/supabase'
// import type { PreRegistrationFormData } from '@/types'

// export async function POST(request: NextRequest) {
//     try {
//         const body: PreRegistrationFormData = await request.json()

//         // Validate required fields
//         const required = ['full_name', 'email', 'company_name', 'role', 'plan_interest']
//         for (const field of required) {
//             if (!body[field as keyof PreRegistrationFormData]) {
//                 return NextResponse.json(
//                     { success: false, error: `Missing required field: ${field}` },
//                     { status: 400 }
//                 )
//             }
//         }

//         // Check if email already exists
//         const { data: existing, error: fetchError } = await supabase
//             .from('pre_registrations')
//             .select('email')
//             .eq('email', body.email)
//             .single()

//         if (existing) {
//             return NextResponse.json(
//                 { success: false, error: 'Email already registered' },
//                 { status: 409 }
//             )
//         }

//         // Insert into Supabase
//         const { data, error } = await supabase
//             .from('pre_registrations')
//             .insert([
//                 {
//                     full_name: body.full_name,
//                     email: body.email,
//                     company_name: body.company_name,
//                     role: body.role,
//                     plan_interest: body.plan_interest,
//                     status: 'pending',
//                     created_at: new Date().toISOString()
//                 }
//             ])
//             .select()

//         if (error) {
//             console.error('Supabase error:', error)
//             return NextResponse.json(
//                 { success: false, error: 'Database error' },
//                 { status: 500 }
//             )
//         }

//         // Here you could also send a welcome email or add to CRM

//         return NextResponse.json({
//             success: true,
//             message: 'Successfully registered!',
//             data: data[0]
//         })

//     } catch (error) {
//         console.error('API error:', error)
//         return NextResponse.json(
//             { success: false, error: 'Internal server error' },
//             { status: 500 }
//         )
//     }
// }
// app/api/pre-register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with service role for admin operations
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Add this to your .env.local
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
)

// Regular client for anon operations
const supabaseAnon = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate required fields
        const required = ['full_name', 'email', 'company_name', 'role', 'plan_interest']
        for (const field of required) {
            if (!body[field as keyof typeof body]) {
                return NextResponse.json(
                    { success: false, error: `Missing required field: ${field}` },
                    { status: 400 }
                )
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Try with service role first (bypasses RLS)
        let result
        let error

        // Method 1: Using service role (if available)
        if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
            const { data, error: serviceError } = await supabaseAdmin
                .from('pre_registrations')
                .insert([
                    {
                        full_name: body.full_name.trim(),
                        email: body.email.toLowerCase().trim(),
                        company_name: body.company_name.trim(),
                        role: body.role,
                        plan_interest: body.plan_interest,
                        status: 'pending',
                        created_at: new Date().toISOString()
                    }
                ])
                .select()

            if (!serviceError) {
                result = data
            }
            error = serviceError
        }

        // Method 2: Try anon client as fallback
        if (!result) {
            const { data, error: anonError } = await supabaseAnon
                .from('pre_registrations')
                .insert([
                    {
                        full_name: body.full_name.trim(),
                        email: body.email.toLowerCase().trim(),
                        company_name: body.company_name.trim(),
                        role: body.role,
                        plan_interest: body.plan_interest,
                        status: 'pending',
                        created_at: new Date().toISOString()
                    }
                ])
                .select()

            if (!anonError) {
                result = data
            }
            error = anonError
        }

        if (error) {
            console.error('Supabase error details:', {
                message: error.message,
                code: error.code,
                details: error.details,
                hint: error.hint
            })

            // Check for duplicate email error
            if (error.message?.includes('duplicate key') || error.code === '23505') {
                return NextResponse.json(
                    { success: false, error: 'This email is already registered' },
                    { status: 409 }
                )
            }

            // RLS error
            if (error.code === '42501') {
                return NextResponse.json(
                    {
                        success: false,
                        error: 'Unable to register at this time. Please contact support.',
                        details: 'RLS policy restricted'
                    },
                    { status: 403 }
                )
            }

            return NextResponse.json(
                { success: false, error: 'Failed to register. Please try again.' },
                { status: 500 }
            )
        }

        // Success response
        return NextResponse.json({
            success: true,
            message: 'Successfully registered for early access!',
            data: result?.[0]
        })

    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        )
    }
}