import { NextResponse } from "next/server";
import { connectUser } from '../../../lib/mongodbUser'
import User from '../../../models/User'

export async function POST(request) {
    const { name, email } = await request.json();

    await connectUser();
    await User.create({ name, email });

    return NextResponse.json({
        message: "User Registered"
    },
        { status: 201 }
    );
}


