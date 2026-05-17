import {format} from 'date-fns'

function Today(){
    const now = new Date();

    return(
        <div className='color-clock'>
        <p>Today is {format(now, 'eeee')}</p>
        <p>{format(now, 'HH:mm:ss')}</p>
        </div>
    )
        
    
}
export default Today