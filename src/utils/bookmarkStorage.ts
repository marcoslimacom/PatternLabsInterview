const getAllBookmarkLs = (): Array<string> => {
  const allBookmarkersLs = localStorage.getItem("boomarks");
  const allBookmarkers = allBookmarkersLs ? JSON.parse(allBookmarkersLs) : [];
  return allBookmarkers;
};

export function addBookmark(region: string) {
  const allBookmarkers = getAllBookmarkLs();
  allBookmarkers.push(region);
  localStorage.setItem("boomarks", JSON.stringify(allBookmarkers));
}

export function removeBookmark(region: string) {
  const allBookmarkers = getAllBookmarkLs();
  const allBookmarkersUpdated = allBookmarkers.filter((bookmark: any) => {
    return bookmark !== region;
  });
  localStorage.setItem("boomarks", JSON.stringify(allBookmarkersUpdated));
}

export function getAllBookmark(): Array<string> {
  return getAllBookmarkLs();
}
