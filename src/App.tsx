import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { data } from './mock';
import schema from './schemas/example/schema.json';
import uischema from './schemas/example/uischema.json';
import StandaloneForm from './components/standaloneForm';

const App = ({ classes }: WithStyles<typeof styles>) => {
  const [displayDataAsString, setDisplayDataAsString] = React.useState('');
  const [jsonformsOutputData, setJsonformsOutputData] = React.useState<Object>(
    data
  );

  React.useEffect(() => {
    setDisplayDataAsString(JSON.stringify(jsonformsOutputData, null, 2));
  }, [jsonformsOutputData]);

  return (
    <Grid
      container
      justify={'center'}
      spacing={1}
      className={classes.container}
    >
      <Grid item sm={6}>
        <Typography variant={'h3'} className={classes.title}>
          Bound data
        </Typography>
        <div className={classes.dataContent}>
          <pre id='boundData'>{displayDataAsString}</pre>
        </div>
      </Grid>
      <Grid item sm={6}>
        <Typography variant={'h3'} className={classes.title}>
          Rendered form
        </Typography>
        <div className={classes.demoform} id='form'>
          <StandaloneForm
            schema={schema}
            uischema={uischema}
            jsonformsInputData={data}
            setJsonformsOutputData={setJsonformsOutputData}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(App);
