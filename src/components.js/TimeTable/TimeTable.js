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

    return (
        <div>
            {
                props.data.map((data) => {
                    let startTime = data.starttime
                    let endTime = data.endtime

                    let durationInNumber = convertTimeToNumber(endTime) - convertTimeToNumber(startTime)
                    let durationInTime = convertNumberToTime(durationInNumber)

                    return (
                        <div key={uuidv4()}>
                            <div className='flex-container'>
                                <p className='destination'>{data.from}</p>
                                <p className='duration destination'>{durationInTime}</p>
                                <p className='destination'>{data.to}</p>
                            </div>
                            <div className='flex-container'>
                                <div className='circle LeftCircle'></div>
                                <div className='line'></div>
                                <div className='circle rightCircle'></div>
                            </div>
                            <div className='flex-container'>
                                <p className='time'>{data.starttime} Uhr</p>
                                <p className='time'>{data.endtime} Uhr</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}