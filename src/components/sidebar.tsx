import React, { useState, useEffect } from 'react';
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
import Link from 'next/link';
import { useStore } from '@/store';
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

  getItem('Lĩnh vực kinh doanh', 'sub1', <MailOutlined />, [
    getItem(
      <Link href="/marketing">Marketing truyền thông </Link>,
      '5',
      <GlobalOutlined />
    ),
    getItem(
      <Link href="/setup">Đóng gói chuỗi</Link>,
      '6',
      <ApartmentOutlined />
    ),
    getItem(
      <Link href="/supply">Cung ứng dịch vụ, sản phẩm</Link>,
      '7',
      <SendOutlined />
    ),
    getItem(
      <Link href="/humans">Cung ứng nhân lực</Link>,
      '8',
      <UsergroupAddOutlined />
    ),
  ]),
];
const Sidebar = ({ selectedKey }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [role, setRole] = useState('client');
  const { UserSlice } = useStore();

  useEffect(() => {
    setRole(UserSlice?.user?.role);
  }, [UserSlice?.user]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Box
      sx={{
        marginRight: '1.6rem',
        backgroundColor: '#fff',
        borderRadius: '1rem',
        padding: '1rem',
        // height: '100%',
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
        defaultOpenKeys={['sub1', 'sub2']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={
          role === 'admin'
            ? [
                ...items,
                getItem('Quản lý', 'sub2', <AppstoreOutlined />, [
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
                ]),
              ]
            : items
        }
      />
    </Box>
  );
};

export default Sidebar;
