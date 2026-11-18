export default function Avatar({ name, photo, color }) {
  if (photo) {
    return <img className="avatar" src={photo} alt="" />;
  }
  return (
    <span className="avatar" style={{ background: color || "#5f6368" }} aria-hidden="true">
      {name[0].toUpperCase()}
    </span>
  );
}
