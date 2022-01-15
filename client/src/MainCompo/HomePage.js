import React from 'react'
import HomeContainer from '../Component1/HomeContainer'
import HomeHeading from '../Component1/HomeHeading'



export default function HomePage() {

    return (
        <div>
            <HomeHeading title = "SOCIORAMA"/>
            <HomeContainer sports = "Sports" movies = "Movies" edu = "Education"/>
        </div>
    )
}
