import './style.css';
import { useState, useEffect } from 'react';
import TimeTable from '../TimeTable/TimeTable';
import data from '../../timeTableData.json'

export default function FrankfurtFilter(props) {

    let timeTableData = data.fahrplananzeige

    const [fromFrank, setFromFrank] = useState(true)
    const [from, setFrom] = useState([])
    const [to, setTo] = useState([])

    const fromFrankfurt = () => {
        const fromFilter = timeTableData.filter(e => e.from === 'Frankfurt(Main)Hbf');
        setFromFrank(true)
        setFrom(fromFilter)
        console.log("from", fromFilter)
    }

    const toFrankfurt = () => {
        const toFilter = timeTableData.filter(e => e.to === 'Frankfurt(Main)Hbf');
        console.log("from", toFilter)
        setFromFrank(false)
        setTo(toFilter)
    }

    useEffect(() => {
        toFrankfurt()
    }, [])

    return (
        <div className='frankfurtFilterContainer'>
            <div className='titleContainer'>
                <h3 className='db'>DB</h3>
                <h3 className='title'>Fahrplananzeige</h3>
            </div>
            <div className='btnsContainer'>
                <button
                    onClick={() => fromFrankfurt()}
                    className={`${fromFrank ? 'clickedBtn rightMargin' : 'btn rightMargin'}`}
                >
                    von Frankfurt
                </button>
                <button
                    onClick={() => toFrankfurt()}
                    className={`${!fromFrank ? 'clickedBtn rightMargin' : 'btn rightMargin'}`}
                >
                    nach Frankfurt
                </button>
            </div>
            <TimeTable
                data={fromFrank ? from : to}
                fromFrank={fromFrank}
            />
        </div>
    )
}