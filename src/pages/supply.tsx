import IntroProto from '@/components/introProtoType';
import React from 'react';

const Supply = () => {
  return (
    <IntroProto
      selectedKey="7"
      title="CUNG ỨNG DỊCH VỤ"
      content={[
        `THỢ TỐT là thành viên của EASY1 chuyên cung cấp dịch vụ Homeservice cho các hộ gia đình, mang trong mình sứ mệnh trở thành quản gia trong ngôi nhà, thay bạn chăm sóc tất cả các trang thiết bị trong gia đình nhằm đảm bảo sức khỏe và nâng cao chất lượng cuộc sống.`,
        `Dịch vụ bảo dưỡng, sửa chữa thiết bị lọc nước, sục rửa đường nước sinh hoạt của THỢ TỐT được xây dựng theo mô hình đạt chuẩn chất lượng dịch vụ 5 sao được Easy1 Holdings bảo chứng.`,
      ]}
      imgSrc="https://easy1.vn/wp-content/uploads/2023/03/z4203320116494_615e9fbee78fdab2a5f862538a40e032-scaled.jpg"
    />
  );
};

export default Supply;
