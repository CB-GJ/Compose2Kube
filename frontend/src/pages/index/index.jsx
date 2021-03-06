import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Hidden, Grid } from "@material-ui/core"
import FileUpload from "../../components/file-upload"
import SampleFile from "../../components/file-sample"
import Intro from "../../components/intro"

import Image from "../../assets/images/file-sync.svg"
import BackgroundImage from "./style"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  downloadBtn: {
    textAlign: "center"
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs container>
          <Intro />
        </Grid>
        <Hidden smDown>
          <Grid item xs={4} container zeroMinWidth>
            {/* <img className={classes.img} src={Image} alt="file image" /> */}
            <BackgroundImage src={Image} />
          </Grid>
        </Hidden>
      </Grid>

      <Box m="2rem">
        <FileUpload id="file-upload" />
      </Box>
      <Box className={classes.downloadBtn}>
        <SampleFile />
      </Box>
    </div>
  )
}

export default Index
