import React from 'react';
import { Button } from '@headlessui/react';

export default function Header() {
    return (
        <Button className='inline-flex items-center gap-2 rounded-md bg-violet-500 py-1.5 px-3 text-sm/6 font-semibold text-red-700 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-indigo-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
      Save changes
        </Button>
    );
}