import React from 'react'

interface HeaderProps{
    title: string,
    category: string,
    query: string,
}

const Header = ({ title, category, query }: HeaderProps) => {

    if(query && category) {
        return (<h1 className='heading3 self-start text-white-800'>
            Search results for {query} in <span className='capitalize'>{category}</span>
        </h1>)
    }

    else if(query && !category) {
        return (<h1 className='heading3 self-start text-white-800'>
            Search results for {query}
        </h1>)
    }

    else if(category && !query) {
        return (<h1 className='heading3 self-start text-white-800'>
            <span className='capitalize'>{category}</span> Resources
        </h1>)
    }

  return (
    <h1 className='heading3 self-start text-white-800'>No Results found.</h1>
  )
}

export default Header