import React from 'react';
import Grid from '@material-ui/core/Grid'
import shunds from './../images/shunds.png';

class Shun extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item sm={12}>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-4">
                        <br />
                        <br />
                        <p style={{ fontSize: 25, textIndent: "2em", color: "rgb(220, 220, 220)" }}>
                            舜为我国上古时期的五帝之一。姓姚，有虞氏，名重华，史称虞舜。
                        </p>
                        <p style={{ fontSize: 25, textIndent: "2em", color: "rgb(220, 220, 220)" }}>
                            约四千三百年以前，舜出生于山西省垣曲县境内的诸冯山。孟子曰：“舜生于诸冯，
                            迁于负夏。” 《史记·五帝本纪录》载：“舜耕历山，渔雷泽，陶河滨，作什器于寿丘，
                            就时于负夏。” 《水经注》记：“教水南流历鼓钟山峡，悬洪五丈，飞流注壑，北四十里
                            大舜浚井在焉。东有大阜为瞽冢，南有诸冯，北有历山，东南有雷泽，东北有耕田遗迹。“
                            舜青少年时期曲尽孝道的感人故事，在垣曲民间千古流传。因此，垣曲素有”舜乡”之称。
                        </p>
                        <p style={{ fontSize: 20, textIndent: "2em", color: "rgb(220, 220, 220)", textAlign: "right" }}>
                            ——垣曲舜文化研究会会长 李道义
                         </p>
                    </div>
                    <div className="col-md-6">
                        <br />
                        <img src={shunds} className="shunds" title="大舜之光" alt="大舜之光" />
                    </div>
                    <div className="col-md-1"></div>
                </Grid>
                <br />
            </Grid>
        )
    }
}

export default Shun;
