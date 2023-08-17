type genryType = "Fiction" | "Novel" | "Mystery" | "History" | "Romance";

export type IBook = {
  title: string;
  author: string;
  image: string;
  genres: genryType[];
  publicationYear: string;
  authorId: string;
};
