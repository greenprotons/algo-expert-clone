import {Box,Typography,Paper} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AlgoExpertLogo from '../assets/logoAlgoExpert.png'

import TickSign from './TickSign';
import CloseSign from './CloseSign';

const InterviewTable = () => {

    function createData(
        name: string,
        codingInterviews: JSX.Element,
        leetCode: JSX.Element,
        algoExpert: JSX.Element,
      ) {
        return { name, codingInterviews, leetCode, algoExpert };
      }
      
      const rows = [
        createData('100+ Practice Questions', <TickSign/>, <TickSign/>, <TickSign/>),
        createData('Data Structures Content', <TickSign/>, <TickSign/>, <TickSign/>),
        createData('Guided Format', <TickSign/>, <CloseSign/>, <TickSign/>),
        createData('Coding Workspace', <CloseSign/>, <TickSign/>, <TickSign/>),
        createData('Multiple Programming Languages', <CloseSign/>, <TickSign/>, <TickSign/>),
        createData('High-Quality Solutions',<TickSign/>, <CloseSign/>, <TickSign/>),
        createData('Video Explanations', <CloseSign/>, <CloseSign/>, <TickSign/>),
        createData('Mock Interviews', <CloseSign/>, <CloseSign/>, <TickSign/>),
        createData('All-In-One Platform', <CloseSign/>, <CloseSign/>, <TickSign/>),
      ]

    const styleLogo = {
        marginRight:"10px",
        width: "25px",
        verticalAlign: "middle",
    }

    const heading= {
        p: "20px",   
        textAlign: "left",    
        color: "#445d6e",
        fontSize:"18px",
        fontWeight:"bold"
    }
    const algoExpert ={
        bgcolor:"#626ee3",
        color:"#fff"
    }
    const headingNames = {
        fontSize:"18px",fontWeight:"bold",p:"30px 20px",color:"#445d6e",width:"25%"
    }

  return (
    <Box sx={{p:"100px 20px"}}>
        <Box sx={{maxWidth:"1200px",m:"0 auto"}}>
        <Typography variant="h3" sx={{textAlign:"center",fontSize:"35px",mb:"20px"}}>A Better Way to Prep for Coding Interviews.</Typography>
            <TableContainer component={Paper} elevation={4} square>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center"sx={{...headingNames}}>Cracking the Coding Interviews</TableCell>
                        <TableCell align="center"sx={{...headingNames}}>LeetCode</TableCell>
                        <TableCell align="center"sx={{...headingNames,...algoExpert}}><img style={styleLogo} src={AlgoExpertLogo} alt="Logo"/>AlgoExpert</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" sx={{...heading}}>
                            {row.name}
                        </TableCell>
                        <TableCell align="center">{row.codingInterviews}</TableCell>
                        <TableCell align="center">{row.leetCode}</TableCell>
                        <TableCell align="center">{row.algoExpert}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Box>
  )
}

export default InterviewTable
