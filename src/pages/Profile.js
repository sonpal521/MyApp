import { Typography ,Box, Card,CardMedia} from '@mui/material'
import React from 'react'

export default function Profile() {
  
    return (
<>
   <Box sx={{m: 2, width:'300px'}} >
   <Typography sx={{mb:2}}>
   My Profile
   </Typography>
   <Card>
      <CardMedia
        component="img"
        alt="Sample Image"
        width="200"
        height="200" // Adjust the height as needed
        image="https://simg.nicepng.com/png/small/67-675501_banner-library-male-computer-user-big-image-png.png" // Replace with the path or URL of your image
        title="Sample Image"
      />
    </Card>
    <Typography sx={{mt:2}}>
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard
    
     dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived not 
      only five centuries, but also the leap into electronic typesetting, remaining 
     
        
    </Typography>
  </Box>
      
      </>
  )
}
