import { useEffect } from 'react';

/** Set judul tab browser, misal "Masuk | videobelajar". */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | videobelajar` : 'videobelajar';
  }, [title]);
}
