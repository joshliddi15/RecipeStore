'use client'
import React from "react";
import {useAuthContext} from '@/context/AuthContext'

function Page() {
    const { user } = useAuthContext();
    console.log('User in Admin:', user);

      return(<h1>Only logged in users can view this page</h1>);}
export default Page;