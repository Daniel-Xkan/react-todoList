import { useState } from 'react'

const AddPlan = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a plan')
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' action="" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Plan</label>
                <input type="text" placeholder='Add Plan' value={text} 
                onChange={(e)=>setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Day and Time</label>
                <input type="text" placeholder='Add Day and Time' value={day}
                onChange={(e)=>setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Save Plan' className='btn btn-block' />
        </form>
    )
}

export default AddPlan