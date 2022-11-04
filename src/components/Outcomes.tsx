import React from 'react'
import {Box ,Typography, Paper} from '@mui/material'

const Outcomes = () => {

    const image = {
        width: "100%",
        opacity: ".2",
        filter: "grayscale(100%) brightness(0)",
    }
    const imagesSource = [
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/a2b3c3709ffedce2a22a.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/3cd767dea94a85078ca4.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/3b7d9f4b073deb6a9b74.png"},
        { url:"	https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/6591cdc0702b32310306.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/b2bd91d7b87b2181ca45.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/7ae42bac3b34999c0db3.png"},
    ]
    const secondImagesSource = [
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/6c585c33ca6c71c79bb7.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/f50ae7cbf6cc805bdadc.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/35e044b3354aaa0caed5.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/0384060dcbf73b6a707c.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/9dd55e54b5a28658bf4e.png"},
        { url:"https://assets.algoexpert.io/spas/main/prod/g84b011724d-prod/dist/images/52d8f54e445899c1e716.png"},
    ]
  return (
    <Box sx={{p:"100px 20px"}}>
        <Paper elevation={3} sx={{
            maxWidth:"1200px",
            m:"0 auto",
            textAlign:"center"
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                p:"60px 40px",
                
            }}>
                <Typography variant="h4" sx={{mb:"20px",color:"#02203c"}}>With Great Outcomes.</Typography>
                <Typography variant="h6" sx={{mb:"50px",color:"#445d6e"}}>Our Customers have gotten offers fromawesome companies.</Typography>
                <Box sx={{
                    flex: "0 0 230px",
                    overflow: "hidden",
                    position: "relative",
                }}>
                <Box sx={{backgroundImage:"linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0))",
                                height: "100%",
                                position: "absolute",
                                width: "40px",
                                zIndex: 1}}></Box>
                    <Box sx={{  height: "100px",
                                margin: "0 0 20px",
                                position: "relative",
                                width: "1400px",
                                }}>
                        <Box sx={{animationName: "UfVN7X1TlxVKLdrNDqcp",position: "absolute",display:"flex",width:"100%"}}>
                            {imagesSource.map((img,index)=>{
                                return(
                                    <Box sx={{flex: "1 1 200px",
                                            margin: "20px"}}  key={index}>
                                        <img style={image} src={img.url}/>
                                    </Box>
                                )
                            })}
                        </Box>

                        <Box sx={{animationName: "UfVN7X1TlxVKLdrNDqcp",position: "absolute",display:"flex",width:"100%",left:"100%"}}>
                            {imagesSource.map((img,index)=>{
                                return(
                                    <Box sx={{flex: "1 1 200px",
                                            margin: "20px"}}  key={index}>
                                        <img style={image} src={img.url}/>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>

                    <Box sx={{  height: "100px",
                                margin: "0 0 20px",
                                position: "relative",
                                width: "1400px",
                                }}>
                        <Box sx={{animationName: "UfVN7X1TlxVKLdrNDqcp",position: "absolute",display:"flex",width:"100%",left:"-100%"}}>
                        {secondImagesSource.map((img,index)=>{
                                return(
                                    <Box sx={{flex: "1 1 200px",
                                            margin: "20px"}}  key={index}>
                                        <img style={image} src={img.url}/>
                                    </Box>
                                )
                            })}
                        </Box>

                        <Box sx={{animationName: "UfVN7X1TlxVKLdrNDqcp",position: "absolute",display:"flex",width:"100%"}}>
                        {secondImagesSource.map((img,index)=>{
                                return(
                                    <Box sx={{flex: "1 1 200px",
                                            margin: "20px"}}  key={index}>
                                        <img style={image} src={img.url}/>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box sx={{backgroundImage:"linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0))",
                        height: "100%",
                        position: "absolute",
                        width: "40px",
                        zIndex: 1,
                        right: 0,
                        top: 0}}></Box>
                </Box>
            </Box>
        </Paper>
    </Box>
  )
}

export default Outcomes
