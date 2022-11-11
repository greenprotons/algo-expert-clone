import { Box,Button,Typography ,CardContent ,CardMedia,Card  } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function createData(
    image:string,
    name:string,
    profession:string,
    logo:string,
    desc:string
){
    return{image,name,profession,logo,desc}
}
const allEngineersData = [
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/1b9a05eb524cd1db08c6.jpg","Alex","Software Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/a2b3c3709ffedce2a22a.png","AlgoExpert was the backbone of my technical coding interview preparation. It allows you to efficiently work through the most common variations of problems asked by top-tier companies without having to spend hours 'battling' an algorithm only to come up with an inefficient or incorrect solution. There are a lot of resources available for repetition, but AlgoExpert differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these problems is better than trying to memorize lines of code. I highly recommend AlgoExpert."),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/6592e47c701c3ba79dbb.jpg","Corbin","Software Developer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/a2b3c3709ffedce2a22a.png","As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough."),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/7072c78919931af052cc.jpg","Carlos","Software Developer intern","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/a2b3c3709ffedce2a22a.png","I'm just writing to thank you for this product. I had failed in so many interviews before, but I wanted to get into a top tech company so much that I even enrolled in a Master's program. Even then, I was unsure if I had what it takes to make it. From the moment I heard your first video explanation, I thought 'this is exactly the way to solve an interview question' (plus the extra points you can grab by asking clarifying questions). After a few months of studying, mainly on AlgoExpert, I got offers to intern at Microsoft and Google!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/a0ae92ef8d06f76c2ab9.jpg","Marlies","Software Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/a2b3c3709ffedce2a22a.png","I just accepted an offer with Palantir, and also received an offer from Amazon and a handful of startups. AlgoExpert does a great job selecting problems- many of my interview questions were variants of problems on the website. And when I came across problems I hadn't seen before, AlgoExpert gave me the tools to select the right data structures and identify patterns. Thanks AlgoExpert!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/e64dc64b640a5660031f.jpg","Adarsh","Software Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/f16a65e0bb8afbc03b4d.png","I just got a job offer from Oracle and most of the questions they asked, I had practiced on AlgoExpert. Even when they asked questions I was not familiar with, I was able to break down the problem and write code which I learned from the explanations section on AlgoExpert. Being a Computer Science Engineering student, I had fundamental knowledge in Data Structures & Algorithms, but I didn't know how to approach, break down and apply this knowledge to solve problems. Also since all the problems are classified into categories, I was able to easily identify my weak points and work on those. Extremely grateful to AlgoExpert !"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/bc23db5c75890195ea7a.jpg","Elana","Senior Software Engineer","	https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/3b7d9f4b073deb6a9b74.png","The video explanations and detailed code examples on AlgoExpert have changed the way I approach coding problems. It has been an incredible asset during my career journey and I highly recommend it to anyone preparing for the job market."),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/750fd7ff32a5f82fea20.jpg","Albetro","Software Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/d203a613de57ce6ccc4a.png","I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/ddea69f603de80265d0f.jpg","Onyeka","Web Developer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/9571632cbce64faa29c2.png","You can choose to spend your time scouring the internet for resources, or you can invest your money wisely and get as good a resource as you'll need. AlgoExpert is a big league product, with a high quality selection of algorithms and expert explanations. This is the best place to sharpen your problem solving skills on all the best material."),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/ac3ed816e6b39ca926a5.jpg","Ayoub","Software Engineer Intern","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/52d8f54e445899c1e716.png","Hey, just wanted to thank you for AlgoExpert! I signed up a few months back and I went through 60% of the problems. Before AlgoExpert I was awful at solving anything harder than a LeetCode easy, now I can do LeetCode mediums without much effort and tackle LeetCode hards in a reasonable time frame! I dont think I would have gotten an internship without AlgoExpert, so thank you!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/82b39796603734f6c314.jpg","Sreepriya","Software Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/b2bd91d7b87b2181ca45.png","I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/083586f534608d90c9f3.jpg","Eren","Data Engineer","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/0384060dcbf73b6a707c.png","I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!"),
    createData("https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/68e1094f7b6748b70db5.jpg","Jeremy","Analyst","https://assets.algoexpert.io/spas/main/prod/ga1a934c586-prod/dist/images/6c585c33ca6c71c79bb7.png","I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!"),
    createData("https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png","You","Dream Job","","Got an AlgoExpert success story to share? Tell us  where you work, what your position is, how helpful AlgoExpert was in getting it, and give us a link to your LinkedIn profile!"),
]
const readMoreBtn = {
    bgcolor:"#fff",color:"#02203c",boxShadow: "0 2px 4px rgba(50,50,93,.1)!important",
    transition:" transform .2s,box-shadow .2s",p:"13px 38px",textTransform:"capitalize",fontSize:"16px"
}

const EngineerSliderList = () => {
    const logoStyle={
        display:"flex",
        margin:"5px auto",
        height:"25px",
    }
    const engineerImage={
        boxShadow: "0 3px 5px 0 rgb(0 0 0 / 40%)",
        borderRadius: "50%",
        marginLeft: "8.8rem",
        marginTop: "-30px",
        position: "absolute"
    }
    const controlButtons = {
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: "50%",
        boxShadow:" 0 2px 4px 1px rgb(50 50 93 / 10%)",
        display: "flex",
        height:" 40px",
        justifyContent: "center",
        margin: "0 10px",
        minWidth: "40px",
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const sliderRef = useRef(null)
      useEffect(()=>{
          console.log(sliderRef.current)
      },[]);
  return (
    <Box sx={{p:"100px 20px"}}>
      <Typography variant="h4" sx={{mb:"20px",color:"#02203c",textAlign:"center"}}>And Over 135,000 Satisfied Engineers.</Typography>
      <Box sx={{maxWidth:"1000px",m:"0 auto",overflow:"hidden",p:"5px"}}>
        <Slider ref={sliderRef} {...settings}>
            {allEngineersData?.map((item,index)=>{
                return(
                    <Box sx={{display:"-webkit-box",gap:"15px"}}>
                    <Card sx={{maxWidth: "325px",mt:"2rem",borderTop:"4px solid #626ee3",height:"320px",display:"flex",flexDirection:"column",position:"relative",overflow:"initial"}}  key={index}>
                        <Box sx={{...engineerImage}}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt="green iguana"
                                sx={{width:"50px",display:"flex",height:"50px",
                                    justifyContent:"center",borderRadius:"50%",alignItems:"center"}}
                            />
                        </Box>
                        <CardContent sx={{color: "#02203c",justifyContent: "center",
                                            display: "flex",
                                            flexDirection: "column",overflow:"hidden"}}>
                            
                            <Typography variant="h5" component="div" sx={{fontSize: "18px",margin: "1.5rem 0 10px",textAlign: "center"}}>
                                {item.name}
                            </Typography>
                            <Box sx={{mb:"15px"}}>
                                <Typography variant="h5" sx={{fontSize: "16px",margin: "1rem 0 10px",textAlign: "center"}}>
                                    {item.profession}
                                </Typography>
                                <img src={item.logo} alt="" style={logoStyle}/>
                            </Box>
                            <Box sx={{ overflow: "auto",
                                    '&::-webkit-scrollbar': {
                                        width: '0.4em',
                                        height:"6px"
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: "#dadada",
                                        borderRadius: "3px",
                                    }}}>
                                <Typography variant="body2" color="text.secondary" sx={{fontSize:"15px"}}>{item.desc}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
              </Box> 
                )
            })}
        </Slider>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                p:"30px 0 0"}}>
                        <Button onClick={()=>sliderRef.current.slickPrev()}   
                                sx={{...controlButtons,"&.MuiButton-root:hover":{
                                                        boxShadow:" 0 6px 10px 2px rgb(50 50 93 / 10%)",
                                                        transform:" translateY(-3px)",
                                                        bgcolor:"#fff"
                            }}}>
                                <ArrowBackIcon sx={{width:"20px",color:"#626ee3"}}/>
                        </Button>
                        <Button  onClick={()=>sliderRef.current.slickNext()} 
                                sx={{...controlButtons,"&.MuiButton-root:hover":{
                                                        boxShadow:" 0 6px 10px 2px rgb(50 50 93 / 10%)",
                                                        transform:" translateY(-3px)",
                                                        bgcolor:"#fff"
                            }}}>
                                <ArrowForwardIcon sx={{width:"20px",color:"#626ee3"}}/>
                        </Button>
            </Box>
      </Box>
      <Box sx={{m:"50px 0 0",textAlign:"center"}}>
            <Button sx={{...readMoreBtn,"&.MuiButton-root:hover":{
                bgcolor: '#fff!important',
                boxShadow: '0 6px 10px 2px rgba(50,50,93,.1)!important',
                color: '#02203c!important',
                transform: 'translateY(-3px)'
            }}}>Read More Testimonials</Button>
      </Box>
    </Box>
  )
}

export default EngineerSliderList
function focus() {
    throw new Error('Function not implemented.');
}

