import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { selectMail } from './config/mailSlice'
import { useDispatch } from 'react-redux'

function EmailRow({id,title,subject,description,time,minutes,date}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const openMail=()=>{
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
                minutes,
                date,
            })
        );
        navigate('/mail');
    };
  return(
    <div className='emailRow' onClick={()=>openMail()}>
        <div className='emailRow_options'>
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>
        <div className='emailRow_title'>
            {title}
        </div>
        <div className='emailRow_message'>
            <h4>{subject}
                <span className='emailRow_description'>-
                    {description}
                </span>
            </h4>
        </div>
        <div className='emailRow_time'>
            {`${date}-${time}:${minutes} ${time>11?"pm":"am"}`}
        </div>
    </div>
  )
}


export default EmailRow