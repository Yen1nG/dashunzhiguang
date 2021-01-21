import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


export default function Footer() {
const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={1} style={{'textAlign': 'left', 'backgroundColor': '#986524', 'color': 'white'}}></Grid>
                <Grid item xs={11} style={{'textAlign': 'left', 'backgroundColor': '#986524', 'color': 'white'}}>
                    <br/>
                    素材提供： 刘拴安 |
                    信息提供： 刘拴安 <br/>
                    联系邮箱： admin@dashunzhiguang.com <br/>
                    联系电话： 13466950989 <br/>
                    公司名称： 垣曲县博安文化产业有限责任公司 <br/>
                    公司地址： 山西省运城市垣曲县新城镇中条大街中条综合市场
                </Grid>
                <Grid item xs={12} style={{'textAlign': 'center', 'fontSize': 9, 'backgroundColor': '#986524', 'color': 'white'}}>
                <span>Copyright © 2021 dashunzhiguang.com. All rights reserved.</span>
                </Grid>
                <br/>
            </Grid>
        </div>
    )
}
