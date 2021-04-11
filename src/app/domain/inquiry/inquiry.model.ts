export type Inquiry = {
  email: string;
  name: string;
  title: string;
  content: string;
};

export type InquiryResponse = {
  status: 'success' | 'failure';
};
