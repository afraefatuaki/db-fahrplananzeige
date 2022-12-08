import './style.css';
import { v4 as uuidv4 } from 'uuid';


export default function TimeTable(props) {


    function convertTimeToNumber(time) {
        var timeArray = time.split(':');
        return parseInt(timeArray[0], 10) * 60 + parseInt(timeArray[1], 10);
    }

    function convertNumberToTime(number) {
        var hours = Math.floor(number / 60);
        var minutes = number % 60;
        return hours + 'h ' + minutes + "min";
    }

    // console.log('data timetable', props.timeTableData)
    return (
        <div>
            {


                props.fromFrank ?
                    props.fromFrankfurt.map((data) => {
                        let startTime = data.starttime
                        let endTime = data.endtime

                        let durationInNumber = convertTimeToNumber(endTime) - convertTimeToNumber(startTime)
                        let durationInTime = convertNumberToTime(durationInNumber)
                        // console.log("duration in number ", durationInNumber)
                        // console.log("duration in time ", durationInTime)
                        return (
                            <div>
                                <div className='flex-container'>
                                    <p key={uuidv4()}>{data.from}</p>
                                    <div>{durationInTime}</div>
                                    <p key={uuidv4()}>{data.to}</p>
                                </div>
                                <div className='flex-container'>
                                    <div className='circle'></div>
                                    <div className='line'></div>
                                    <div className='circle'></div>
                                </div>
                                <div className='flex-container'>
                                    <p key={uuidv4()}>{data.starttime}</p>
                                    <p key={uuidv4()}>{data.endtime}</p>
                                </div>
                            </div>
                        )
                    })
                    :

                    props.toFrankfurt.map((data) => {
                        let startTime = data.starttime
                        let endTime = data.endtime

                        let durationInNumber = convertTimeToNumber(endTime) - convertTimeToNumber(startTime)
                        let durationInTime = convertNumberToTime(durationInNumber)

                        return (
                            <div>
                                <div className='flex-container'>
                                    <p key={uuidv4()}>{data.from}</p>
                                    <div>{durationInTime}</div>
                                    <p key={uuidv4()}>{data.to}</p>
                                </div>
                                <div className='flex-container'>
                                    <div className='circle LeftCircle'></div>
                                    <div className='line'></div>
                                    <div className='circle rightCircle'></div>
                                </div>
                                <div className='flex-container'>
                                    <p key={uuidv4()}>{data.starttime}</p>
                                    <p key={uuidv4()}>{data.endtime}</p>
                                </div>
                            </div>
                        )
                    })




            }
        </div>
    )
}