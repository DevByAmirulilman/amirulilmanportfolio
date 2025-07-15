import { Box, Typography } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';

const GithubComponent = () => {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: 'center',
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, color: '#E1D7B7'}}>
        My GitHub Contributions
      </Typography>
      <GitHubCalendar
        hideTotalCount={true}
        style={{color:'#E1D7B7'}}
        username="DevByAmirulilman"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        color="green"
      />
    </Box>
  );
};

export default GithubComponent;
