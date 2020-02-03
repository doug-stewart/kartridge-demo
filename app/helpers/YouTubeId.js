export const YouTubeId = (url) => {
  const regex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const id = url.match(regex);

  if (!id || !id[1]) return null;
  return id[1];
}
