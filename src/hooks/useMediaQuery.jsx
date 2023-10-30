import { useEffect, useState } from "react";

const useMediaQuery = (query) => {

  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {

    const media = window.matchMedia(query);

    media.matches !== matches ?? setMatches(media.matches)

    const handler = (e) => {
      setMatches(e.matches)
    }

    media.addEventListener("change", handler)

    return () => media.removeEventListener("change", handler)

  }, [query]);

  return matches
}

export default useMediaQuery