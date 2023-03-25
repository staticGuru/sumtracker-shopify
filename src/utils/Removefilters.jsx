export function Removefilters(setContact, setPage) {
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("contact");
  setContact(null);
  setPage(1);
  if (window.history.replaceState) {
    const url =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.replaceState(
      {
        path: url,
      },
      "",
      url
    );
  }
}
