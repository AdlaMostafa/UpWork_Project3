import React from 'react'
import {StyledParent5} from './style'
import { FifthRightPartData } from '../../../../../../mock/FifthRightPartData'
import { Typography } from '@mui/material'
import CustomButton from "@/components/atoms/Button";
const FifthRightPart :React.FC= () => {
  return (
    <StyledParent5>
        <div className='title5'>
            <h3>{FifthRightPartData.title}</h3>
            <CustomButton
              variant="outline"
              text="Manage Projects"
              style={{
                backgroundColor: "White",
                borderRadius: "20px",
                color: "Green",
                fontWeight: "500",
                border: "2px solid Green",
                width: "250px",
                marginBottom: "30px",
                height: "40px",
              }}
            />
        </div>
        <Typography variant="body2" color="black">{FifthRightPartData.about}</Typography>

    </StyledParent5>
  )
}

export default FifthRightPart