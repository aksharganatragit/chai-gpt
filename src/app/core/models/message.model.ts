export interface Message {
  id: string;
  sender: 'user' | 'chai';
  text: string;
  timestamp: Date;
  allowReadMore?: boolean;
}
