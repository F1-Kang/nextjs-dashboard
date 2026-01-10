import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Title Metadata: Chịu trách nhiệm về tiêu đề của trang web được hiển thị 
        trên tab trình duyệt. Nó rất quan trọng đối với SEO vì nó giúp các công cụ 
        tìm kiếm hiểu được nội dung của trang web. */}
        <title>NEXT - Dashboard</title>

        {/* Description Metadata: cung cấp cái nhìn tổng quan ngắn gọn về nội dung trang web 
        và thường được hiển thị trong kết quả của công cụ tìm kiếm. */}
        <meta name="description" content="A brief description of the page content." />

        {/* Keyword Metadata: bao gồm các từ khóa liên quan đến nội dung trang web, giúp các công cụ 
        tìm kiếm lập chỉ mục trang. */}
        <meta name="keywords" content="keyword1, keyword2, keyword3" />

        {/* Open Graph Metadata: nâng cao cách trình bày trang web khi được chia sẻ trên nền tảng 
        truyền thông xã hội, cung cấp thông tin như tiêu đề, mô tả và hình ảnh xem trước. */}
        <meta property="og:title" content="Title Here" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="image_url_here" />

        {/* Favicon Metadata: liên kết favicon (một biểu tượng nhỏ) với trang web, được hiển thị 
        trên thanh hoặc tab địa chỉ của trình duyệt. */}
        <link rel="icon" href="path/to/favicon.ico" />

      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
