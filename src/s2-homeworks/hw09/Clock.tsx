import { useEffect, useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const intervalID = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(intervalID)
    }

    const stop = () => {
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
    }

    const onMouseEnter = () => setShow(true) 
    const onMouseLeave = () => setShow(false)

    // useEffect(() => {
    //     return () => {
    //         if (timerId) {
    //             clearInterval(timerId)
    //         }
    //     }
    // }, [timerId])

    const stringTime = date.toLocaleTimeString('en-US', { hour12: false }) || <br /> 
    const stringDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`

    const stringDay = date.toLocaleDateString('en-US', { weekday: 'long' }) || <br /> 
    const stringMonth = date.toLocaleDateString('en-US', { month: 'long' }) || <br /> 

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} 
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} 
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
