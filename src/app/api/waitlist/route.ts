// app/api/waitlist/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Enhanced email validation
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Create table if it doesn't exist
        await sql`
            CREATE TABLE IF NOT EXISTS waitlist (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                ip_address VARCHAR(45),
                user_agent TEXT
            );
        `;

        try {
            // Attempt to insert the email
            await sql`
                INSERT INTO waitlist (email)
                VALUES (${email.toLowerCase()})
            `;

            return NextResponse.json(
                { message: 'Successfully joined waitlist!' },
                { status: 200 }
            );
        } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
            // Handle duplicate email more gracefully
            if (error?.code === '23505') { // Postgres unique violation code
                return NextResponse.json(
                    { error: 'This email is already on the waitlist' },
                    { status: 409 }
                );
            }
            throw error; // Re-throw other errors to be caught by outer try-catch
        }

    } catch (error) {
        console.error('Waitlist error:', error);
        return NextResponse.json(
            { error: 'Failed to join waitlist. Please try again later.' },
            { status: 500 }
        );
    }
}

// Optionally add a GET method to check if an email is already registered
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json(
                { error: 'Email parameter is required' },
                { status: 400 }
            );
        }

        const result = await sql`
            SELECT EXISTS(
                SELECT 1 FROM waitlist 
                WHERE email = ${email.toLowerCase()}
            );
        `;

        return NextResponse.json({
            exists: result.rows[0].exists
        });

    } catch (error) {
        console.error('Error checking email:', error);
        return NextResponse.json(
            { error: 'Failed to check email status' },
            { status: 500 }
        );
    }
}