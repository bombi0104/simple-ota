import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  margin: {
    margin: theme.spacing(1)
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
    <Paper className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={classes.margin}
        href={`itms-services://?action=download-manifest&url=${buildUrl.manifest}`}
      >
        INSTALL IOS
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        className={classes.margin}
        href={`${buildUrl.apk}`}
      >
        DOWNLOAD ANDROID APK
      </Button>
    </Paper>
  );
}

export default App;
