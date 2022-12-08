import './style.css';
import { useState, useEffect } from 'react';
import TimeTable from '../TimeTable/TimeTable';

export default function FrankfurtFilter(props) {

    let timeTableData = props.timeTableData

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
    return (
        <div className='frankfurtFilterContainer'>
            <div className='titleContainer'>
                <h3 className='db'>DB</h3>
                <h3 className='title'>Fahrplananzeige</h3>
            </div>
            <div className='btnsContainer'>
                <button
                    onClick={() => fromFrankfurt()}
                    className='btn rightMargin'
                >
                    von Frankfurt
                </button>
                <button
                    onClick={() => toFrankfurt()}
                    className='btn'
                >
                    nach Frankfurt
                </button>
            </div>
            <TimeTable
                fromFrankfurt={from}
                toFrankfurt={to}
                fromFrank={fromFrank}
            />

        </div>
    )
}