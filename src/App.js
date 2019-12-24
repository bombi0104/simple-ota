import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing(1),
    width: `300px`
  }
}));

function App() {
  const classes = useStyles();
  const buildUrl = {
    baseUrl: 'https://xxx.ngrok.io',
    manifest: '/build/manifest.plist',
    apk: '/build/APK_FILE_NAME.apk'
  };

  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
      style={{ backgroundColor: 'teal' }}
    >
      <Paper className={classes.root} elevation={3}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          href={`itms-services://?action=download-manifest&url=${buildUrl.manifest}`}
        >
          INSTALL IOS
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          className={classes.button}
          href={`${buildUrl.apk}`}
        >
          DOWNLOAD ANDROID APK
        </Button>
      </Paper>
    </Grid>
  );
}

export default App;
