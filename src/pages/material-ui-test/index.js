import {
  CssBaseline,
  Toolbar,
  IconButton,
  Paper,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  header: {
    width: '100%',
    backgroundColor: '#5665D2',
    padding: '0 10px 0 20px',
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  sideMenuContainer: {
    width: '240px',
    height: 'calc(100vh - 60px)',
  },
  sideMenuPaper: {
    height: 'calc(100vh - 60px)',
  },
  contentContainer: {
    padding: '15px 30px',
  },
  contentTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  contentHeader: {
    marginBottom: '20px',
  },
  headerButtonList: {
    width: 'calc(100vw - 300px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBody: {},
});

const MaterialUiTest = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className={classes.root}>
        <header className={classes.header}>
          <Toolbar className={classes.toolBar}>
            <div className={classes.title}>타이틀</div>
            <IconButton>
              <AccountCircle htmlColor='#ffffff' />
            </IconButton>
          </Toolbar>
        </header>
        <main className={classes.main}>
          <aside className={classes.sideMenuContainer}>
            <Paper className={classes.sideMenuPaper} variant='outlined' square>
              <List
                subheader={
                  <ListSubheader component='div' id='service-header'>
                    서비스 관리 메뉴
                  </ListSubheader>
                }
              >
                <ListItem button>
                  <ListItemText primary='룸 리스트 관리' />
                </ListItem>
                <ListItem button>
                  <ListItemText primary='회사 도메인 관리' />
                </ListItem>
                <ListItem button>
                  <ListItemText primary='캘린더 관리' />
                </ListItem>
              </List>
              <Divider />
              <List
                subheader={
                  <ListSubheader component='div' id='admin-header'>
                    어드민 관리 메뉴
                  </ListSubheader>
                }
              >
                <ListItem button>
                  <ListItemText primary='어드민 리스트 관리' />
                </ListItem>
              </List>
            </Paper>
          </aside>
          <section className={classes.contentContainer}>
            <div className={classes.contentTitle}>룸 리스트 관리</div>
            <div className={classes.contentHeader}>
              <div className={classes.headerButtonList}>
                <Button variant='contained' color='primary'>
                  필터 리스트 열기
                </Button>
                <Button variant='contained' color='primary'>
                  export
                </Button>
              </div>
            </div>
            <div className={classes.contentBody}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align='center'>타입</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>회사</TableCell>
                      <TableCell align='center'>생성 날짜</TableCell>
                      <TableCell align='center'>활성 여부</TableCell>
                      <TableCell align='center'>공지 여부</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell>1</TableCell>
                    <TableCell align='center'>오피셜</TableCell>
                    <TableCell>2021 상반기 제네시스랩 채용설명회</TableCell>
                    <TableCell>제네시스랩</TableCell>
                    <TableCell align='center'>2021.04.20</TableCell>
                    <TableCell align='center'>Y</TableCell>
                    <TableCell align='center'>Y</TableCell>
                  </TableBody>
                  <TableFooter>
                    <TablePagination count={1} page={1} rowsPerPage={5}></TablePagination>
                  </TableFooter>
                </Table>
              </TableContainer>
            </div>
          </section>
        </main>
      </div>
    </CssBaseline>
  );
};

export default MaterialUiTest;
