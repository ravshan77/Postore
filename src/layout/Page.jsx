import React from 'react'
import PageController from './PageController'

export const Page = ({page}) => {
  return (
    <>
      <header className="h-[4%] container bg-[#4447E2] text-white">{ page.title }</header>
      <section className='h-[96%] w-full'><PageController page={page} /></section>
    </>
  )
}
