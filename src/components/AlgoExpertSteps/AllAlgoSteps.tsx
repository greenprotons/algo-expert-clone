import { Box, Typography } from '@mui/material'
import WatchVideo from './WatchVideo'
import GradingIcon from '@mui/icons-material/Grading';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DatasetIcon from '@mui/icons-material/Dataset';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import QuizIcon from '@mui/icons-material/Quiz';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


const AllAlgoSteps = () => {
  const allSteps = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    maxWidth:"1230px"
  }
  const individualStep = {
    display:"flex",
    flexDirection:"column",
    margin: "0 20px 20px",
    maxWidth: "330px",
    alignItems:"center",
    padding: "20px",
    textAlign: "center",
  }

  const allData = [
    {
      icon:GradingIcon,
      title:"160 Hand Picked Questions",
      description:"Coding interview prep is a numbers game that many   candidates lose. We've hand-picked 160 of the best coding interview questions to prepare you for every interview you could encounter.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"
    },
    {
      icon:OndemandVideoIcon,
      title:"100+ Hours Of Video Explanations",
      description:"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"
    },
    {
      icon:DatasetIcon,
      title:"Data Structures Crash Course",
      description:"Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"    },
    {
      icon:CodeIcon,
      title:"Solutions In 9 Languages",
      description:"Not everyone speaks the same programming language. All of our solutions come in 9 different languages: JavaScript, TypeScript, Python, Swift, Kotlin, C++, Java, C#, and Go.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"
    },
    {
      icon:IntegrationInstructionsIcon,
      title:"Feature-Rich Coding Workspace",
      description:"Coding out solutions to algorithm problems is the best way to practice. Our coding workspace lets you type out your answers and run them against our test cases, right here on the website.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"
    },
    {
      icon:DatasetIcon,
      title:"Space-Time Complexity Analyses",
      description:"Understanding how much memory an algorithm uses and how fast it runs is crucial to passing coding interviews. All of our explanations include a rigorous space-time complexity analysis.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"
    },
    {
      icon:QuizIcon,
      title:"4 Curated Assessments",
      description:"Real coding interviews are timed and have multiple questions. We've curated 4 assessments to reflect a real day of coding interviews, filled with variety and appropriate difficulty.",
    },
    {
      icon:AddToQueueIcon,
      title:"Mock Coding Interviews",
      description:"Nothing compares to doing a real coding interview with a real human being. We let you do mock coding interviews with other users on a shared workspace, right here on AlgoExpert.",
    },
    {
      icon:CardGiftcardIcon,
      title:"Recruiting Profile & Certificate",
      description:"Landing technical interviews can be harder than passing them. Once you earn the AlgoExpert Certificate, we refer you to tech companies so you can directly start their interview process.",
      learn:"Learn more.",
      bgColor:"#fff",
      borderR:"6px",
      shadow:"0 0 35px -2px rgb(0 0 0 / 20%)",
      pointer:"pointer"    },
  ]
  return (
    <Box sx={{
        p:"150px 20px 0 20px",
        bgcolor:"#f6f9fc"
    }}>
        <Typography variant='h2' sx={{textAlign:"center",mb:"20px",fontSize:"35px",color:"#02203c"}}>What is AlgoExpert?</Typography>
        <WatchVideo/>
        <Box sx={{...allSteps}}>
              {
                allData.map((item,index)=>{
                  return(
                    <Box sx={{...individualStep,"&.MuiBox-root:hover":{
                      bgcolor: item.bgColor,borderRadius:item.borderR,boxShadow:item.shadow,cursor:item.pointer,transition: "box-shadow .3s"}}} key={index}>
                      <item.icon sx={{color:"#626ee3",fontSize:"50px"}}/>
                      <Typography variant="h5" sx={{m:"15px 0",fontSize:"20px"}}>{item.title}</Typography>
                      <Typography sx={{color:"#445d6e",fontSize:"14px"}}>{item.description}</Typography>
                      <Typography sx={{color:"#626ee3",fontSize:"14px","&.MuiTypography-root:hover":{
                        textDecoration:"underline"
                      }}}>{item?.learn}</Typography>
                    </Box>
                  )
                })
              }
          
        </Box>
    </Box>
  )
}

export default AllAlgoSteps