export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface TherapyRequest {
  fullName: string;
  email: string;
  specialization: string;
  goals: string;
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  replyCount: number;
  preview: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  commitment: string;
  description: string;
  requirements: string[];
}