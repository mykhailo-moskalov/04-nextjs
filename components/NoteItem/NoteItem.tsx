import Link from "next/link";
import { Note } from "@/lib/api/clientApi";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default NoteItem;
