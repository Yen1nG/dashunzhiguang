import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slideshow from './slideShow.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header.js';
import BGI from './images/BGI.jpg';
import Footer from './Footer.js';
import shunwood from './images/shunwood.png';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import newsvideo from './images/newsvideo.mp4';
import videoposter from './images/videoposter.jpg';

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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}  style={{'backgroundColor': '#FFFFFF'}}>
      <Grid container spacing={0}>
        <Grid item md={12} sm={12} xs={12} style={{'paddingBottom': 0}}>
          <Header />
        </Grid>

        <Grid item md={1} sm={1} xs={1} style={{'paddingRight': 0}}></Grid>
        <Grid item md={10} sm={12} xs={12} style={{'backgroundImage': `url(${BGI})`, 'backgroundSize': '100% 100%', 'paddingTop': '10px', 'paddingBottom': '10px'}}>
          <Slideshow />
        </Grid>
        <Grid item md={1} sm={1} xs={1} style={{'paddingRight': 0}}></Grid>

        <Grid item md={1} sm={1} xs={1}></Grid>
        <Grid item md={5} sm={12} xs={12} style={{'backgroundColor': '#856d72', 'paddingRight': '80px', 'paddingLeft': '80px', 'paddingTop': '7%', 'marginTop': '10px', 'marginBottom': '10px'}}>
          <p style={{ fontSize: 22, textIndent: '2em', color: 'rgb(220, 220, 220)', 'lineHeight': 1.8}}>
            约四千三百年以前，舜出生于山西省垣曲县境内的诸冯山。孟子曰：“舜生于诸冯，
            迁于负夏。” 《史记·五帝本纪录》载：“舜耕历山，渔雷泽，陶河滨，作什器于寿丘，
            就时于负夏。” 《水经注》记：“教水南流历鼓钟山峡，悬洪五丈，飞流注壑，北四十里
            大舜浚井在焉。东有大阜为瞽冢，南有诸冯，北有历山，东南有雷泽，东北有耕田遗迹。“
            舜青少年时期曲尽孝道的感人故事，在垣曲民间千古流传。因此，垣曲素有”舜乡”之称。
          </p>
          <p style={{ fontSize: 20, textIndent: "2em", color: "rgb(220, 220, 220)", textAlign: "right"}}>
            ——垣曲舜文化研究会会长 李道义
          </p>
        </Grid>
        <Grid item md={5} sm={12} xs={12} style={{'marginTop': '10px', 'marginBottom': '10px'}}>
          <img src={shunwood} style={{'display': 'block', 'width': '100%', 'height': '100%'}} className="shunds" title="大舜之光" alt="大舜之光"/>
        </Grid>
        <Grid item md={1} sm={1} xs={1}></Grid>

        <Grid item md={1} sm={1} xs={1} style={{'paddingRight': 0}}></Grid>
        <Grid item md={10} sm={12} xs={12} style={{'paddingBottom': '10px'}}>
          <Player playsInline poster={videoposter} src={newsvideo} styple={{'paddingTop': '50%'}}/>
        </Grid>
        <Grid item md={1} sm={1} xs={1} style={{'paddingRight': 0}}></Grid>

      </Grid>
      <Footer />
    </div>
  );
}
