import GlobalStyle from './styles/global-style';
import { Layout, Menu, Divider, Button, Table } from 'antd';
import 'antd/dist/antd.css';
import { AccountCircle } from '@material-ui/icons';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #5665d2;
  .header-title {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
  }
  .header-profile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledMenu = styled(Menu)`
  padding: 20px 10px;
`;

const StyledContent = styled(Content)`
  padding: 30px;
  .content-title {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  .filter-button-section {
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-between;
  }
`;

const dataSource = [
  {
    key: '1',
    name: '2021 제네시스랩 채용설명회',
    id: 1,
    type: '오피셜',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '타입',
    dataIndex: 'type',
    key: 'type',
  },
];

const AntdTest = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyledHeader>
          <div className='header-title'>타이틀</div>
          <div className='header-profile-icon'>
            <AccountCircle htmlColor='#ffffff' />
          </div>
        </StyledHeader>
        <Layout>
          <Sider theme='light' width={240}>
            <StyledMenu>
              <Menu.ItemGroup title='서비스 관리 메뉴'>
                <Menu.Item key='1'>룸 리스트 관리</Menu.Item>
                <Menu.Item key='2'>회사 도메인 관리</Menu.Item>
                <Menu.Item key='3'>캘린더 리스트 관리</Menu.Item>
              </Menu.ItemGroup>
              <Divider />
              <Menu.ItemGroup title='어드민 관리 메뉴'>
                <Menu.Item key='4'>어드민 리스트 관리</Menu.Item>
              </Menu.ItemGroup>
            </StyledMenu>
          </Sider>
          <StyledContent>
            <div className='content-title'>룸 리스트 관리</div>
            <div className='content-body'>
              <div className='filter-button-section'>
                <Button type='primary'>필터 메뉴 열기</Button>
                <Button type='primary'>EXPORT</Button>
              </div>
              <div>
                <Table dataSource={dataSource} columns={columns} />
              </div>
            </div>
          </StyledContent>
        </Layout>
      </Layout>
    </>
  );
};

export default AntdTest;
