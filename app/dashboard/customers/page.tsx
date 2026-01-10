import { Metadata } from 'next';

// ghi đè tiêu đề tùy chỉnh cho một page cụ thể
export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default function Page() {
    return <p>Customers Page</p>
}