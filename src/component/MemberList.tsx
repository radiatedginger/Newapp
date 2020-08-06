import * as React from 'react';
import {useEffect, useState} from 'react';
import {callApi} from "../utils/api";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../store";
import {getMembers} from "../store/member/thunks";
import MemberModel from "../store/member/model/MemberModel";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(5),
                width: '25ch',
            },

        },
        dataInputField:{
            margin: 10
        },
        containter:{
            display:'flex',
            flexWrap:'wrap',
        },
        dateField:{
            marginLeft:theme.spacing(1),
            marginRight:theme.spacing(1),
            width:200,
            margin: 10
        },
    }),
);

const MemberList: React.FC = () => {
    const classes = useStyles();
    const [fetched, setFetch] = useState(false);
    const [filteredList, updateList] = useState();
    const [newMemberData,updateMemberData] = useState();
    const [fullName,updateFullName] =useState();
    const [mbrId,updateMbrID] =useState();
    const [grade,updateGrade] =useState();
    const [assignedPas,updatePas] =useState();
    const [dafsc,updateDafsc] =useState();
    const [officeSymbol,updateOffice] =useState();
    const [dutyTitle,updateTitle] =useState();
    const [dutyStartDate,updateStartDate] =useState();
    const [dutyPhone,updatePhone] =useState();
    const [supvName,updateSupvName] =useState();
    const [supvBeginDate,updateSupvBegin] =useState();
    const [dateArrivedStation,updateDateArrived] =useState();
    const [rnltd,updateRnltd] =useState();
    const [dor,updateDOR] =useState();

    const dispatch = useDispatch();
    const members = useSelector(({member}:ApplicationState)=> member.data);

    useEffect(()=>{
        dispatch(getMembers())
    }, [dispatch])

    function handleChange(e:any,field:string){
    switch (field){
        case 'mbrId':
            updateMbrID(e.target.value)
            break;
        case 'fullName':
            updateFullName(e.target.value)
            break;
        case 'grade':
            updateGrade(e.target.value)
            break;
        case 'pas':
            updatePas(e.target.value)
            break;
        case 'dafsc':
            updateDafsc(e.target.value)
            break;
        case 'officeSymbol':
            updateOffice(e.target.value)
            break;
        case'dutyTitle':
            updateTitle(e.target.value)
            break;
        case'dutyStartDate':
            updateStartDate(e.target.value)
            break;
        case'dutyPhone':
            updatePhone(e.target.value)
            break;
        case'supvName':
            updateSupvName(e.target.value)
            break;
        case'supvBeginDate':
            updateSupvBegin(e.target.value)
            break;
        case'dateArrivedStation':
            updateDateArrived(e.target.value)
            break;
        case'rnltd':
            updateRnltd(e.target.value)
            break;
        case'dor':
            updateDOR(e.target.value);
    }
    }

    function handleClick(){
        let newMemberData: MemberModel = new MemberModel(
            'Jacy Hoag',
            '',
            'tsg',
            'pas',
            '',
            '',
            '',
            new Date(),
            '',
            '',
            new Date(),
            new Date,
            new Date(),
            new Date());

        //console.log(newMemberData)
       const res = callApi('POST','/api/members/save',newMemberData);
        console.log(res)
    }

    useEffect(() => {
        callApi('GET','api/members').then(data => updateMemberData(data))
    },[fetched]);


    return (
        <form className={classNames(classes.root,'memberDataInputForm')} noValidate autoComplete="off">
            <button onClick={handleClick}/>

            <TextField id="outlined-basic" className= 'dataInputField' label="Member ID" variant="outlined" onChange={event=>handleChange(event,'mbrId')}/>
            <TextField id="outlined-basic" className= 'dataInputField' label="Full Name" variant="outlined" onChange={event=>handleChange(event,'fullName')}/>
            <TextField id="outlined-basic" className= 'dataInputField' label="Grade" variant="outlined" onChange={event=>handleChange(event,'grade')}/>
            <TextField id="outlined-basic" className= 'dataInputField' label="PAS" variant="outlined" onChange={event=>handleChange(event,'assignedPas')}/>
            <TextField id="outlined-basic" className= 'dataInputField' label="DAFSC" variant="outlined" onChange={event=>handleChange(event,'dafsc')}/>
            <TextField id="outlined-basic" className= 'dataInputField' label="Office" variant="outlined" />
            <TextField id="outlined-basic" className= 'dataInputField' label="Duty Title" variant="outlined" />
            <TextField id="date" className= 'dateField' type="date" variant="outlined" />
            <TextField id="outlined-basic" className= 'dataInputField' label="Duty Phone" variant="outlined" />
            <TextField id="outlined-basic" className= 'dataInputField' label="Supervisor" variant="outlined" />
            <TextField id="date" type={'date'} className= 'dateField'  variant="outlined" />
            <TextField id="outlined-basic" type={'date'} className= 'dataInputField'  variant="outlined" />
            <TextField id="outlined-basic" type={'date'} className= 'dataInputField'  variant="outlined" />
            <TextField id="outlined-basic" type={'date'} className= 'dataInputField'  variant="outlined" />
        </form>
    )
};

export default MemberList;
