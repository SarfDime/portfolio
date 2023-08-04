import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPerformanceMode } from '../../../../store/performanceSlice'

function PerformanceSwitcher() {
    const performanceMode = useSelector((state) => state.performance.performanceMode)
    const dispatch = useDispatch()

    const togglePerformanceMode = () => {
        dispatch(setPerformanceMode(!performanceMode))
    }
    
    return (
        <div className='performanceContainer'>
            <button className={performanceMode ? 'active' : ''} onClick={togglePerformanceMode}>
                <p>Performance Mode</p>
                <div>
                    <h3><span>ON</span> / <span>OFF</span></h3>
                </div>
            </button>
        </div>
    )
}

export default PerformanceSwitcher
