import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <Card className='w-[310px] sm:w-[350px] md:min-w-[350px] lg:min-w-[450px]'>
      <CardHeader>
        <div className='flex justify-center mb-4'>
          <Image
            src={'/logo.png'}
            alt='logo'
            width={120}
            height={120}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <CardTitle className='text-center'>Log in to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4 mt-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='Input your email' />
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              placeholder='Input your password'
            />
          </div>
          <div className='flex gap-2 items-center'>
            <Checkbox id='remember' />
            <label htmlFor='remember'>Remember me</label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Login</Button>
      </CardFooter>
    </Card>
  );
};

export default Page;
