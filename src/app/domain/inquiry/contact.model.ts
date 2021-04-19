export type Contact = {
  email: string;
  name: string;
  title: string;
  content: string;
};

export type ContactResponse = {
  status: 'success' | 'failure';
};
