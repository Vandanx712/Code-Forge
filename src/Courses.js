import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'


function Courses() {
    return (
        <>
            <div className=' flex-1 flex-wrap mt-10 lg:flex lg:justify-evenly lg:mt-20'>
                <Link to='/detail1'>
                    <Card coursespic='fullstack.jpg' coursename='Build Full stack Project' coursedescriptation='30DaysCoding' courses='18' price='Free' />
                </Link>
                <Link to='/detail2'>
                    <Card coursespic='codehlep.webp' coursename='Data Structures & Algorithms' coursedescriptation='CodeHelp' courses='100' price='Free' />
                </Link>
                <Link to='/detail3'>
                    <Card coursespic='sheryisns.webp' coursename='Front - End Domination' coursedescriptation='Sheryins' courses='16' price='Free' />
                </Link>
            </div>
        </>
    )
}

export default Courses
