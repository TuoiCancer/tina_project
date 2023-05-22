import React from 'react';
import IntroProto from '@/components/introProtoType';

const Supply = () => {
  return (
    <IntroProto
      selectedKey="8"
      title="CUNG ỨNG NHÂN LỰC"
      content={[
        `EASY HUMAN chuyên cung cấp các dịch vụ nhân sự cho Tập đoàn và các đơn vị thành viên. Cung ứng nhân sự đủ và đúng thời điểm chính là lời giải cho bài toán tuyển dụng của doanh nghiệp. Với mạng lưới quan hệ rộng khắp, nguồn thông tin dữ liệu lớn, EASY HUMAN sẽ giúp doanh nghiệp nhanh chóng tìm được các ứng viên phù hợp nhất.`,
        `
        Thông qua chương trình tuyển dụng chuyên nghiệp, EASY HUMAN sẽ giúp công cuộc cung ứng nhân sự đạt được hiệu quả tốt nhất:
`,
        `
        + Tiếp cận với những hồ sơ ứng viên cao cấp, chất lượng. Tất cả hồ sơ tại EASY HUMAN đều được tuyển chọn và sàng lọc kỹ lưỡng.`,
        `
        + Có ngay danh sách thông tin ứng viên phù hợp với vị trí cần tuyển dụng dựa trên thông tin việc làm đăng tuyển.
        `,
        `
        Nguồn nhân lực luôn là yếu tố quan trọng quyết định sự thành công của một doanh nghiệp. Bởi vậy hiểu rõ về cung ứng nhân sự sẽ giúp doanh nghiệp tháo gỡ những khó khăn và phát triển hiệu quả nguồn nhân lực cho doanh nghiệp.
        `,
      ]}
      imgSrc="/humans.jpg"
    />
  );
};

export default Supply;
