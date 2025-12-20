let comments: Comment[] = [];

export interface Comment {
  id: string;
  profile: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}

export async function getComments(profile: string): Promise<Comment[]> {
  return comments.filter(c => c.profile === profile);
}

export async function addComment(comment: Omit<Comment, 'id' | 'likes'>): Promise<Comment> {
  const newComment: Comment = {
    ...comment,
    id: crypto.randomUUID(),
    likes: 0,
    date: new Date().toISOString()
  };
  comments.push(newComment);
  return newComment;
}

export async function deleteComment(id: string): Promise<void> {
  comments = comments.filter(c => c.id !== id);
}
