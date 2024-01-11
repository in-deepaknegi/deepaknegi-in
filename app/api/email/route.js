import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import connectDb from '@/lib/mongo';
import EmailModel from '@/models/email';

export async function POST(req) {
    const { email } = await req.json();

    try {
        await connectDb();

        //check if the email is already present in the database

        const existingEmail = await EmailModel.findOne({email});

        if(existingEmail) {
            return NextResponse.json({
                msg: ['Oops! It seems you are already grooving with us.'],
                success: false,
            })
        }

        //create a new record if the email does not exist
        await EmailModel.create({ email, });

        return NextResponse.json({
            msg: ['Email subscribed successfully'],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];

            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList)
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json({ msg: "Unable to subscribe" });
        }
    }
}