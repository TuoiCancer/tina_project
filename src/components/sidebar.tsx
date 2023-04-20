import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  GlobalOutlined,
  ApartmentOutlined,
  SendOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/home">Trang chủ</Link>, '1', <PieChartOutlined />),
  getItem(
    <Link href="/employee">Quản lí nhân sự </Link>,
    '2',
    <DesktopOutlined />
  ),
  getItem(
    <Link href="/finance">Quản lí tài chính </Link>,
    '3',
    <ContainerOutlined />
  ),

  getItem('Lĩnh vực kinh doanh', 'sub1', <MailOutlined />, [
    getItem('Marketing truyền thông ', '5', <GlobalOutlined />),
    getItem('Đóng gói setup chuỗi ', '6', <ApartmentOutlined />),
    getItem('Cung ứng dịch vụ, sản phẩm', '7', <SendOutlined />),
    getItem('Cung ứng nhân lực', '8', <UsergroupAddOutlined />),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
];
const Sidebar = ({ selectedKey }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Box
      sx={{
        marginRight: '1.6rem',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={[selectedKey]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Box>
  );
};

export default Sidebar;
